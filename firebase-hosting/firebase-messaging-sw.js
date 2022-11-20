// Scripts for firebase and firebase messaging
//This needs to be version **8**.2.0
importScripts("https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging.js");

// Initialize the Firebase app in the service worker by passing the generated config
const firebaseConfig = {
    apiKey: "AIzaSyD4Sk_DmwoG19iBL8WRJuOa_v74LwqNUm4",
    authDomain: "notifications-tutorial-18861.firebaseapp.com",
    projectId: "notifications-tutorial-18861",
    storageBucket: "notifications-tutorial-18861.appspot.com",
    messagingSenderId: "808171359078",
    appId: "1:808171359078:web:4ad12ea532d2fb5baed6a7"
};

firebase.initializeApp(firebaseConfig);

// Initialize firebase messaging
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
    //do nothing
});