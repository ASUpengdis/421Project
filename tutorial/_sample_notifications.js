let header = document.getElementById("headerText");
let permButton = document.getElementById("permissionButton");
let notifButton = document.getElementById("notificationButton");

permButton.addEventListener('click', () => {
    let promise = Notification.requestPermission().then((result) => {
        console.log(result);
    });
});

notifButton.addEventListener('click', () => {
    if (Notification.permission === "granted") {
        const notif = new Notification('Our new notification', {});
    }
});