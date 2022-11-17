let header = document.getElementById("headerText");
let permButton = document.getElementById("permissionButton");
let notifButton = document.getElementById("notificationButton");

let status;

permButton.addEventListener('click', () => {
    let promise = Notification.requestPermission().then((result) => {
        $status = result;
    });
});