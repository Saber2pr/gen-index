/*
 * @Author: saber2pr
 * @Date: 2019-05-27 21:30:23
 * @Last Modified by:   saber2pr
 * @Last Modified time: 2019-05-27 21:30:23
 */
export const createIndex = (moduleNames: string[]) =>
  moduleNames.map(n => `export * from './${n}'`).join('\n')
