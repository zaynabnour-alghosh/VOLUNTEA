importScripts("https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js");

 //the Firebase config object 
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
const messaging = firebase.messaging();


messaging.onBackgroundMessage(function(payload) {
  console.log('Received background message ', payload);
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };

  self.registration.showNotification(notificationTitle,
    notificationOptions);
});