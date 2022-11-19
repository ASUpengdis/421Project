// Scripts for firebase and firebase messaging
importScripts("https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging.js");

// Initialize the Firebase app in the service worker by passing the generated config
const firebaseConfig = {
    apiKey: "AIzaSyBGDS6AJDn5lmiKZdKuILMAsmWeAmBCq6w",
    authDomain: "ser421-22c-push-notifs.firebaseapp.com",
    projectId: "ser421-22c-push-notifs",
    storageBucket: "ser421-22c-push-notifs.appspot.com",
    messagingSenderId: "911821516394",
    appId: "1:911821516394:web:5ada6762a01436cd0b6413"
};

firebase.initializeApp(firebaseConfig);

// Retrieve firebase messaging
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
    console.log("Received background message ", payload);

    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
    };

    self.registration.showNotification(notificationTitle, notificationOptions);
});