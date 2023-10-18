import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from 'firebase/messaging';
import { query,getDatabase,ref,push,onChildAdded,equalTo,orderByChild,onValue,get,child} from "firebase/database";
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
export const database = getDatabase(app);
export const sendMessage = (messageContent, chatroomId, userId,org) => {
  const message = {
      id: Math.random().toString(36).substring(2),
      content: messageContent,
      chatroom_id: chatroomId,
      user_id: userId,
      org_id:org,
      timestamp: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })
  };
  console.log('Sending message:', message.content, 'at', message.timestamp);
  push(ref(database, `messages/${chatroomId}`), message);
  return message;
};
// export const listenForMessages = (chatroomId) => {
//   database.ref('messages').orderByChild('chatroom_id').equalTo(chatroomId).on('child_added', (snapshot) => {
//       const newMessage = snapshot.val();
//       // Update your message state and UI accordingly with the new message
//       console.log('Received message:', newMessage);
//   });
// };

// export const listenForMessages = (chatroomId, callback) => {
//   const dbRef = getDatabase().ref('messages');
//   dbRef.orderByChild('chatroom_id').equalTo(chatroomId).on('child_added', (snapshot) => {
//     const newMessage = snapshot.val();
//     callback(newMessage);
//   });
// };

// export const listenForMessages = (chatroomId, callback) => {
//   const db = getDatabase();
//   const dbRef = ref(db, 'messages');

//   const query = orderByChild('chatroom_id').equalTo(chatroomId);

//   onChildAdded(query, (snapshot) => {
//     const newMessage = snapshot.val();
//     callback(newMessage);
//   });
// };

// export const listenForMessagesRealtime = (chatroomId, callback) => {
//   const db = getDatabase();
//   const chatroomMessagesRef = ref(db, `chatrooms/${chatroomId}/messages`);

//   onValue(chatroomMessagesRef, (snapshot) => {
//     if (snapshot.exists()) {
//       const messages = snapshot.val();
//       console.log('Received messages for chatroom:', messages);
//       callback(messages);
//     } else {
//       console.log('No messages available for this chatroom');
//       callback(null);
//     }
//   }, {
//     onlyOnce: false // Set to true if you want to listen only once
//   });
// };