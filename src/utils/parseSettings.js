import { Logger } from './Logger.js'
import fs from 'fs'

export const parseSettings = (type, filename) => {
  try {
    if (!type) throw new Error('Settings type must be provided')
    if (!filename) throw new Error('Filename must be provided')

    const path = new URL(`${process.cwd()}/.gatex/config/${filename}`, import.meta.url)
    const data = fs.readFileSync(path)

    if (!data) throw new Error('Failed to read broker settings yaml file')

    let result

    switch (type) {
      case 'json':
        result = JSON.parse(data)
        break

      case 'yaml':
        (async () => {
          const { default: YAML } = await import('yaml')
          result = YAML.parse(data)
        })()
        break

      case 'toml':
        (async () => {
          const { default: toml } = await import('toml')
          result = toml.parse(data)
        })()
        break

      default:
        break
    }

    return result
  } catch (error) {
    Logger.error('Failed to parse broker settings', { error })
  }
}
