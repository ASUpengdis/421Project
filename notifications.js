let perm = document.getElementById("permButton");
let baseNotif = document.getElementById("baseNotif");
let decNotif = document.getElementById("decoratedNotif");
let respNotif = document.getElementById("responsiveNotif");
let button3 = document.getElementById("btn3");

let numClicks = 0;

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
            regis.showNotification("Persistent notification up",{actions:[{action:"blue",title:"blue",icon:"./Assets/Grape_logo.png"},{action:'red', title:"red",icon:"https://cdn-icons-png.flaticon.com/512/2431/2431996.png"}]});
        });
    }
});

self.addEventListener("notificationclick",(event) => {
    
    if(event.action === 'blue') {
        console.log("blue pressed");
        
  //      inputDiv.style.background = "blue";
    } else if (event.action === 'red') {
        console.log("red pressed");
    //    inputDiv.style.background = "red";
    }
})