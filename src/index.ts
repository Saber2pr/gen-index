#!/usr/bin/env node

import { Terminal } from '@saber2pr/node'
import { genIndex } from './core'

const [input] = Terminal.getParams()

if (input === '-v') {
  Terminal.getCurrentPkgConfig(__dirname).then(p =>
    console.log(`v${p.version}`)
  )
} else {
  genIndex(input).catch(console.log)
}
