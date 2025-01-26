import { system } from 'gluegun'

import { type JSONValue } from '../../../types'

export async function getJsonFromCmd<T extends JSONValue>(cmd: string) {
  const data = await system.run(cmd, { trim: true })
  const json = JSON.parse(data) as T
  return json
}
