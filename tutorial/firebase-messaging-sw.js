// Scripts for firebase and firebase messaging
//This needs to be version **8**.2.0
importScripts("https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging.js");

// Initialize the Firebase app in the service worker by passing the generated config
const firebaseConfig = {
    //YOUR FIREBASE CONFIG HERE
};

firebase.initializeApp(firebaseConfig);

// Initialize firebase messaging
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
    //do nothing
});