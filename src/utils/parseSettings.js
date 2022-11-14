import { Logger } from './Logger.js'
import fs from 'fs'
import YAML from 'yaml'
import toml from 'toml'

export const parseSettings = (type, filename) => {
  try {
    if (!type) throw new Error('Settings type must be provided')
    if (!filename) throw new Error('Filename must be provided')

    const path = new URL(`${process.cwd()}/${filename}`, import.meta.url)
    const data = fs.readFileSync(path)

    if (!data) throw new Error('Failed to read broker settings file')

    let result

    switch (type) {
      case 'json': {
        result = JSON.parse(data)
        break
      }

      case 'yaml': {
        // const { default: YAML } = await import('yaml')
        result = YAML.parse(data.toString())
        break
      }

      case 'toml': {
        (async () => {
          // const { default: toml } = await import('toml')
          result = toml.parse(data)
        })()
        break
      }

      default:
        break
    }

    return result
  } catch (error) {
    Logger.error('Failed to parse broker settings', { error })
    process.exit(1)
  }
}
