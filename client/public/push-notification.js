import firebase from 'firebase/compat/app';
import 'firebase/compat/messaging';
const firebaseConfig = {
    apiKey: "AIzaSyD9886K8sM_YwIfeB3mwl7TtSt-IPL705Y",
    authDomain: "voluntea-53747.firebaseapp.com",
    projectId: "voluntea-53747",
    storageBucket: "voluntea-53747.appspot.com",
    messagingSenderId: "1013329626527",
    appId: "1:1013329626527:web:2fc8b16cb5affe788fa9aa",
    measurementId: "G-QCMVBQ44E5"
    };
firebase.initializeApp(firebaseConfig);
const messaging=firebase.messaging();
const requestFCMToken = async () => {
    try {
      const permission = await Notification.requestPermission();
      if (permission === 'granted') {
        const token = await messaging.getToken();
        return token;
      } else {
        console.error('Permission denied for notifications');
        return null;
      }
    } catch (error) {
      console.error('Error obtaining FCM token:', error);
      return null;
    }
  };
  window.requestFCMToken = requestFCMToken;