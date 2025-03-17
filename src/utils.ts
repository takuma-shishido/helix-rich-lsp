export function convertSshToHttps(sshUrl: string): string {
  const regex = /^(?<user>[^@]+)@(?<host>[^:]+):(?<repo>.+)$/
  const match = sshUrl.match(regex)
  if (!match || !match.groups) {
    throw new Error("Invalid SSH URL format")
  }
  const { host, repo } = match.groups
  return `https://${host}/${repo}`
}
