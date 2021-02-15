
export function saveToLocale<PayloadTypes>(keys: string, payload: PayloadTypes): void {
  const btoaStorage = btoa(unescape(encodeURIComponent(JSON.stringify(payload))))
  localStorage.setItem(keys, btoaStorage);
}

export function saveToLocaleWithReturn<PayloadTypes>(keys: string, payload: PayloadTypes): PayloadTypes {
  saveToLocale<PayloadTypes>(keys, payload)
  return payload;
}

export function retriveStorageToClient<ReturnTypes>(storageKey: string, returnState: ReturnTypes): ReturnTypes {
  const localData = localStorage.getItem(storageKey)
  if (localData) {
    const atobClient: ReturnTypes = JSON.parse(atob(localData))
    return atobClient
  }

  return saveToLocaleWithReturn(storageKey, returnState);
}