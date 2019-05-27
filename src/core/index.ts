/*
 * @Author: saber2pr
 * @Date: 2019-05-27 21:30:28
 * @Last Modified by: saber2pr
 * @Last Modified time: 2019-05-27 22:37:24
 */
import { FS } from '@saber2pr/node'
import { createIndex } from './utils'

export async function genIndex(dir: string) {
  const isDir = await FS.stat(dir, 'dir')
  if (!isDir) throw new Error(`getIndex: argument must be a dir path.`)

  const result = await FS.readdir(dir)

  const moduleNames = result
    .map(n => n.split('.')[0])
    .filter(m => m !== 'index')

  const index = createIndex(moduleNames)

  await FS.writeFile(`${dir}/index.ts`, index)
}
