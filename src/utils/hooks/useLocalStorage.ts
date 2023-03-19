import { useState } from 'react'

type UseLocalStorageReturn<T> = [T, (value: T) => void]

function useLocalStorage<T>(
  key: string,
  initialValue?: T
): UseLocalStorageReturn<T> {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key)
      return item ? JSON.parse(item) : initialValue
    } catch (error) {
      return initialValue
    }
  })

  const setValue = (value: T) => {
    setStoredValue(value)
    try {
      const valueToStore = JSON.stringify(value)
      window.localStorage.setItem(key, valueToStore)
    } catch (error) {}
  }

  return [storedValue, setValue]
}

export default useLocalStorage
