import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from 'firebase/messaging';
import { getDatabase } from "firebase/database";
const firebaseConfig = {
  apiKey: "AIzaSyD9886K8sM_YwIfeB3mwl7TtSt-IPL705Y",
    authDomain: "voluntea-53747.firebaseapp.com",
    projectId: "voluntea-53747",
    storageBucket: "voluntea-53747.appspot.com",
    messagingSenderId: "1013329626527",
    appId: "1:1013329626527:web:2fc8b16cb5affe788fa9aa",
    measurementId: "G-QCMVBQ44E5",
    databaseURL: "https://voluntea-53747-default-rtdb.firebaseio.com",

};
const app = initializeApp(firebaseConfig);
const messaging = getMessaging(app);
export const requestPermission = () => {

  console.log("Requesting User Permission......");
  Notification.requestPermission().then((permission) => {

    if (permission === "granted") {

      console.log("Notification User Permission Granted."); 
      return getToken(messaging, { 
        vapidKey: `BCF7nZ7sB7TTmkqptX6pW2TZ5d59_N1Eiu1zW2gO9cXlFNQrNz0oVd_z9PkGGhdcBiUFNGegKqKt_CdCPKpd-S0` })
        .then((currentToken) => {

          if (currentToken) {
              localStorage.setItem('fcmToken',currentToken);
            return currentToken;

          } else {
            
            console.log('Failed to generate the app registration token.');
          }
        })
        .catch((err) => {

          console.log('An error occurred when requesting to receive the token.', err);
        });
    } else {

      console.log("User Permission Denied.");
    }
  });

}

requestPermission();
export const onMessageListener = () =>
  new Promise((resolve) => {
    onMessage(messaging, (payload) => {
      resolve(payload);
    });
});
const database = getDatabase(app);
export const sendMessage = (messageContent, chatroomId, userId) => {
  const message = {
      id: Math.random().toString(36).substring(2),
      content: messageContent,
      chatroom_id: chatroomId,
      user_id: userId
  };

  database.ref('messages').push(message);
};
export const listenForMessages = (chatroomId) => {
  database.ref('messages').orderByChild('chatroom_id').equalTo(chatroomId).on('child_added', (snapshot) => {
      const newMessage = snapshot.val();
      // Update your message state and UI accordingly with the new message
      console.log('Received message:', newMessage);
  });
};