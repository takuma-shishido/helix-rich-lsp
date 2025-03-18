import type { SetActivity } from "@xhayper/discord-rpc"
import type { TextDocument } from "vscode-languageserver-textdocument"
import type { LspService } from ".."
import { basename } from "node:path"
import { Client } from "@xhayper/discord-rpc"
import { getLanguage } from "../languages"

export class DiscordIntegration {
  private lsp: LspService

  private client: Client
  private startTimestamp: number

  constructor(lsp: LspService) {
    this.lsp = lsp
    this.client = new Client({ clientId: lsp.config.applicationId })

    this.startTimestamp = 0
  }

  public async start() {
    await this.client.login()

    this.startTimestamp = Date.now()
  }

  public documentToActivity(doc: TextDocument): SetActivity {
    const { config } = this.lsp

    const filename = basename(doc.uri)
    const language = getLanguage(filename) ?? doc.languageId
    const remoteUrl = this.lsp.repositoryUrl

    const activity: SetActivity = {
      startTimestamp: this.startTimestamp,
      state: config.state.replace("{filename}", filename),
      details: this.lsp.workspaceName ? config.details.replace("{workspace}", this.lsp.workspaceName) : "no workspace",
      largeImageKey: config.largeImage.replace("{assetBaseUrl}", config.assetBaseUrl).replace("{language}", language),
      largeImageText: config.largeText.replace("{language}", language),
      smallImageKey: config.smallImage.replace("{assetBaseUrl}", config.assetBaseUrl),
      smallImageText: config.smallText,
    }

    if (config.viewRepository && remoteUrl) {
      activity.buttons = [
        {
          label: "View Repository",
          url: remoteUrl,
        },
      ]
    }

    return activity
  }

  public async setActivity(activity: SetActivity) {
    await this.client.user?.setActivity(activity)
  }

  public async close() {
    await this.client.destroy()
  }
}
