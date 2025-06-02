export enum EStorageKey {
  THEME = "theme",
}

export enum ECookieKey {
  LANG = "lang",
}

export const storeLocalStorageItem = ({
  storageKey,
  storageValue,
}: {
  storageKey: EStorageKey;
  storageValue: string;
}) => {
  try {
    return localStorage.setItem(storageKey, storageValue);
  } catch {
    return undefined;
  }
};

export const retrieveLocalStorageItem = (storageKey: EStorageKey) => {
  try {
    return localStorage.getItem(storageKey);
  } catch {
    return undefined;
  }
};

export const removeLocalStorageItem = (storageKey: EStorageKey) => {
  try {
    return localStorage.removeItem(storageKey);
  } catch {
    return undefined;
  }
};

export const setDocumentCookie = (value: string) => {
  return (document.cookie = value);
};

export const getDocumentCookie = (key: ECookieKey) => {
  const cookieName = `${key}=`;
  const cookies = document.cookie.split(";");
  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i].trim();
    if (cookie.startsWith(cookieName)) {
      return cookie.substring(cookieName.length, cookie.length);
    }
  }
  return "";
};
