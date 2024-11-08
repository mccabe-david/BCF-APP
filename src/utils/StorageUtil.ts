import AsyncStorage from '@react-native-async-storage/async-storage'

const saveObjectToStorage = async (key: string, value: NonNullable<unknown>): Promise<void> => {
  try {
    await AsyncStorage.setItem(
      key,
      JSON.stringify({
        value
      })
    )
  } catch (e) {
    console.log('Error Saving Object')
  }
}

const getDetailsFromStorage = async (key: string): Promise<any> => {
  try {
    const details = await AsyncStorage.getItem(key)
    if (details !== null) {
      return JSON.parse(details)
    }
    return null
  } catch (e) {
    console.log('Error retrieving Object')
  }
}
export const getValueFromKey = async (key: string): Promise<any> => {
  try {
    const details = await AsyncStorage.getItem(key)
    if (details !== null) {
      const parsedDetails = JSON.parse(details)
      return parsedDetails.value // return the value
    }
    return null
  } catch (e) {
    console.log('Error retrieving data')
  }
}

const resetDetailsFromStorage = async (key: string): Promise<void> => {
  try {
    await AsyncStorage.removeItem(key)
    console.log('Reset storage for key: ' + key)
  } catch (e) {
    console.log('Error Resetting Wallet Details')
  }
}

export { saveObjectToStorage, resetDetailsFromStorage, getDetailsFromStorage }
