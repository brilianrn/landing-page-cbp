// src/shared/utils/firebase.ts
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getMessaging } from "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyC1wLjg9794NKNexVMJBKCyigZD91r0bG4",
  authDomain: "my-profile-26627.firebaseapp.com",
  projectId: "my-profile-26627",
  storageBucket: "my-profile-26627.appspot.com",
  messagingSenderId: "609975590397",
  appId: "1:609975590397:web:dd07814b3e79667296cd94",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const messaging = getMessaging(app);
