import type {Upload} from '../../types'

/**
 * Memory based configstore.
 * Used mostly for unit tests.
 *
 * @author Mitja Puzigaća <mitjap@gmail.com>
 */
export default class MemoryConfigstore {
  data: Map<string, Upload> = new Map()

  get(key: string): Upload | undefined {
    return this.data.get(key)
  }

  set(key: string, value: Upload) {
    this.data.set(key, value)
  }

  async delete(key: string) {
    return this.data.delete(key)
  }
}
