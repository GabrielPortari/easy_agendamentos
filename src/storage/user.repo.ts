import Storage from 'expo-sqlite/kv-store';

const USERNAME_KEY = 'app_username';

export async function setUsernameStorage(name: string): Promise<void> {
  await Storage.setItemAsync(USERNAME_KEY, name);
}

export async function getUsernameStorage(): Promise<string | null> {
  const v = await Storage.getItemAsync(USERNAME_KEY);
  return v;
}

export async function removeUsernameStorage(): Promise<void> {
  await Storage.removeItemAsync(USERNAME_KEY);
}

export default {
  setUsernameStorage,
  getUsernameStorage,
  removeUsernameStorage,
};
