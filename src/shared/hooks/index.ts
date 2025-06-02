"use client";

import { auth, messaging } from "@/shared/utils/firebase";
import { signInAnonymously } from "firebase/auth";
import { getToken } from "firebase/messaging";
import { useEffect, useRef } from "react";
import { urlBase64ToUint8Array } from "../utils/formatter";

export const useFirebaseMessaging = () => {
  const hasInitialized = useRef(false);

  useEffect(() => {
    const setupFirebaseMessaging = async () => {
      try {
        if ("serviceWorker" in navigator) {
          const registration = await navigator.serviceWorker.register(
            "/firebase-messaging-sw.js"
          );
          console.log(
            "Service Worker registered with scope:",
            registration.scope
          );

          // Sign in Anonymously
          const userCredential = await signInAnonymously(auth);
          console.log("Signed in as:", userCredential.user.uid);

          // Request Notification Permission
          const permission = await Notification.requestPermission();
          if (permission !== "granted") {
            console.log("Notification permission denied");
            return;
          }

          console.log("Notification permission granted.");

          // Get FCM Token
          const vapidKey =
            "BGQ2r_q8fMRT93iFclPCA8FoedB8SPlR_H6o-hpm6i3lMN7ZwHsKmUHSVFDfj8sxe4skiMlL1DUUtN15nu9VIE8";
          console.log(
            urlBase64ToUint8Array(vapidKey),
            " ==>>>> urlBase64ToUint8Array(vapidKey)"
          );
          const token = await getToken(messaging, {
            vapidKey,
            serviceWorkerRegistration: registration,
          });

          console.log("FCM Token:", token);
          // Kirim token ke server kamu kalau mau
        }
      } catch (error) {
        console.error("Error setting up Firebase Messaging:", error);
      }
    };

    if (!hasInitialized.current) {
      hasInitialized.current = true;
      setupFirebaseMessaging();
    }
  }, []);
};
