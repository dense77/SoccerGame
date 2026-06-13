export interface BinaryStorage {
  load(): Uint8Array | null
  save(data: Uint8Array): void
  clear(): void
}

function bytesToBase64(data: Uint8Array): string {
  let binary = ''
  data.forEach((value) => {
    binary += String.fromCharCode(value)
  })

  return btoa(binary)
}

function base64ToBytes(data: string): Uint8Array {
  const binary = atob(data)
  const bytes = new Uint8Array(binary.length)

  for (let index = 0; index < binary.length; index += 1) {
    bytes[index] = binary.charCodeAt(index)
  }

  return bytes
}

export class BrowserBinaryStorage implements BinaryStorage {
  constructor(private readonly storageKey: string) {}

  load(): Uint8Array | null {
    const rawValue = window.localStorage.getItem(this.storageKey)
    if (!rawValue) {
      return null
    }

    return base64ToBytes(rawValue)
  }

  save(data: Uint8Array): void {
    window.localStorage.setItem(this.storageKey, bytesToBase64(data))
  }

  clear(): void {
    window.localStorage.removeItem(this.storageKey)
  }
}

export class MemoryBinaryStorage implements BinaryStorage {
  private data: Uint8Array | null = null

  load(): Uint8Array | null {
    return this.data ? new Uint8Array(this.data) : null
  }

  save(data: Uint8Array): void {
    this.data = new Uint8Array(data)
  }

  clear(): void {
    this.data = null
  }
}
