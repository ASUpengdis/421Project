var perm = document.getElementById("permButton");
var baseNotif = document.getElementById("baseNotif");
var decNotif = document.getElementById("decoratedNotif");
var respNotif = document.getElementById("responsiveNotif");
var button3 = document.getElementById("btn3");

var numClicks = 0;

perm.addEventListener('click', () => {
    //requestPermission works on chrome, not firefox
    let promise = Notification.requestPermission().then((result) => {
        console.log(result);
    });

});
baseNotif.addEventListener('click', () => {
    if (Notification.permission === "granted") {
        const notif = new Notification('Our new notification', {});
    }
});

decNotif.addEventListener('click', () => {
    if (Notification.permission === "granted") {
        const notif = new Notification('Our new notification',
            {
                icon: "https://cdn-icons-png.flaticon.com/512/2431/2431996.png",
                body: "A more detailed message about our notification"
            });
    }
});

respNotif.addEventListener('click', () => {
    if (Notification.permission === "granted") {
        const notif = new Notification('Our responsive notification',
            {
                icon: "https://cdn-icons-png.flaticon.com/512/2431/2431996.png",
                body: "Click on me to increase the counter!"
            });
        notif.addEventListener("click", () => {
            numClicks++;
            document.getElementById("headerText").innerText = "You clicked on the notification " + numClicks + " times!";
        });
    }
});

button3.addEventListener('click', () => {
    if (Notification.permission === 'granted') {
        //navigator.serviceWorker.getRegistration().then((reg) => reg.showNotification("This is a persistent notification"));
        navigator.serviceWorker.ready.then((regis) => {
            regis.showNotification("Persistent notification up",{actions:[{action:"push",title:"Push here",icon:"./Assets/Grape_logo.png"}]});
        });
    }
});