import { system } from 'gluegun'

export async function getJsonFromCmd<T>(cmd: string) {
  const data = await system.run(cmd, { trim: true })
  const json = JSON.parse(data) as T
  return json
}
