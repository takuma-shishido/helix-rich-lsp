# helix-rich-lsp

helix-rich-lsp is an LSP project that adds support for [Discord Rich Presence](https://discord.com/developers/docs/rich-presence/how-to) in [Helix](https://github.com/helix-editor/helix).

Since Helix currently does not support extensions ([a draft PR exists](https://github.com/helix-editor/helix/pull/8675)), an alternative method using LSP is employed. Once extension support is available, the plan is to switch to a different method.

## Preview
![image](https://raw.githubusercontent.com/takuma-shishido/helix-rich-lsp/main/image/presence.png)

## How to Install

### 1. Configure the Language Settings

Copy the `languages.toml` file into your Helix configuration directory:

```sh
cp languages.toml ~/.config/helix/languages.toml
```

### 2. Verify bun Version

This project requires **bun v1.0.28**. Versions later than 1.0.28 have bugs that prevent the LSP from functioning properly.  
If you haven't installed bun yet, please install version 1.0.28 from the [official website](https://bun.sh/).

### 3. Download Prebuilt Binaries

Prebuilt binaries for macOS and Linux are available from the [latest release](https://github.com/takuma-shishido/helix-rich-lsp/releases/latest).

**For macOS:**

```sh
curl -LO https://github.com/takuma-shishido/helix-rich-lsp/releases/latest/download/helix-rich-lsp-macos
chmod +x helix-rich-lsp-macos
mv helix-rich-lsp-macos ~/.local/bin/helix-rich-lsp
```

**For Linux:**

```sh
curl -LO https://github.com/takuma-shishido/helix-rich-lsp/releases/latest/download/helix-rich-lsp-linux
chmod +x helix-rich-lsp-linux
mv helix-rich-lsp-linux ~/.local/bin/helix-rich-lsp
```

> **Note:**  
> If `~/.local/bin` is not in your PATH, please add it to your PATH or move the binary to a directory that is.

### 4. Start Helix

Launch Helix and verify that Discord Rich Presence is displayed correctly.

## Known Issues

- The "View Repository" button is not displayed.  
  → This issue appears to be on Discord's side and cannot be resolved in this project.

## TODO

- [ ] Add idle mode
