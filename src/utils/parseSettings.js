import { Logger } from './Logger.js'
import fs from 'fs'
import YAML from 'yaml'
import toml from 'toml'
import path from 'path'

export const parseSettings = (filename) => {
  try {
    if (!filename) throw new Error('Filename must be provided')

    const file = new URL(`${process.cwd()}/${filename}`, import.meta.url)
    const data = fs.readFileSync(file)

    if (!data) throw new Error('Failed to read broker settings file')

    let result

    switch (path.extname(filename)) {
      case '.json': {
        result = JSON.parse(data)
        break
      }

      case '.yaml':
      case '.yml': {
        result = YAML.parse(data.toString())
        break
      }

      case '.toml': {
        result = toml.parse(data)
        break
      }

      default: {
        throw new Error('Unknown format of settings file')
      }
    }

    return result
  } catch (error) {
    Logger.error('Failed to parse broker settings', { error })
    process.exit(1)
  }
}
