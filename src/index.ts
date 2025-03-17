import type { InitializeParams, InitializeResult, TextDocumentChangeEvent } from "vscode-languageserver/node"
import remoteOriginUrl from "git-remote-origin-url"
import { merge } from "ts-deepmerge"
import { TextDocument } from "vscode-languageserver-textdocument"
import { createConnection, MessageType, ProposedFeatures, ShowMessageNotification, TextDocuments, TextDocumentSyncKind } from "vscode-languageserver/node"
import { DiscordIntegration } from "./mgr/discord"

interface LspConfig {
  applicationId: string
  assetBaseUrl: string
  state: string
  details: string
  largeImage: string
  largeText: string
  smallImage: string
  smallText: string
  viewRepository: boolean
}

export class LspService {
  connection: ReturnType<typeof createConnection>
  documents: TextDocuments<TextDocument>

  config: LspConfig = {
    applicationId: "1330779433946189906",
    assetBaseUrl: "https://raw.githubusercontent.com/takuma-shishido/helix-discord-presence/main/assets/icons",
    state: "Working on {filename}",
    details: "In {workspace}",
    largeImage: "{assetBaseUrl}/{language}.png",
    largeText: "{language}",
    smallImage: "{assetBaseUrl}/helix.png",
    smallText: "Helix",
    viewRepository: false,
  }

  // integration

  discord: DiscordIntegration | undefined // Discord client is initialized in onInitialize
  repositoryUrl: string | undefined // Github
  workspaceName: string | undefined

  constructor() {
    this.connection = createConnection(ProposedFeatures.all)

    this.documents = new TextDocuments(TextDocument)
    this.documents.listen(this.connection)

    this.connection.onInitialize(this.onInitialize.bind(this))
    this.connection.onInitialized(this.onInitialized.bind(this))

    this.documents.onDidOpen(this.onDocumentEvent.bind(this))
    this.documents.onDidChangeContent(this.onDocumentEvent.bind(this))

    this.connection.listen()
  }

  public stop() {
    if (this.discord) this.discord.close()
    this.connection.dispose()
  }

  private async onInitialize(params: InitializeParams): Promise<InitializeResult> {
    if (params.initializationOptions)
      this.config = merge(this.config, params.initializationOptions as Partial<LspConfig>) as LspConfig

    if (params.workspaceFolders && params.workspaceFolders.length > 0) {
      if (this.config.viewRepository) this.repositoryUrl = await remoteOriginUrl({ cwd: params.workspaceFolders[0].uri })
      this.workspaceName = params.workspaceFolders[0].name
    }

    this.discord = new DiscordIntegration(this)
    await this.discord.start()

    return {
      serverInfo: {
        name: "helix-rich-lsp",
        version: "0.0.1",
      },
      capabilities: {
        textDocumentSync: TextDocumentSyncKind.Incremental,
      },
    }
  }

  private async onInitialized() {
    await this.connection.sendNotification(ShowMessageNotification.type, {
      type: MessageType.Info,
      message: "helix-rich-lsp server initialized!",
    })
  }

  private onDocumentEvent(param: TextDocumentChangeEvent<TextDocument>) {
    if (!this.discord)
      return

    const activity = this.discord.documentToActivity(param.document)
    this.discord.setActivity(activity)
  }
}

const lsp = new LspService()

process.on("exit", () => {
  lsp.stop()
})
