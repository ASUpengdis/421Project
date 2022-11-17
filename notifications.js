var button = document.getElementById("btn");
var button2 = document.getElementById("btn2");
var button3 = document.getElementById("btn3");

var status;
button.addEventListener('click', () => {
    //requestPermission works on chrome, not firefox
    let promise = Notification.requestPermission().then((result) => {
        $status = result;
    });

});
button2.addEventListener('click', () => {
    if ($status === "granted") {
        const notif = new Notification('Test thing',
            {
                icon: "./Assets/Grape_logo.png",
                body: "hey there gamer"
            });
        notif.addEventListener("click", () => {
            document.getElementById("header").innerText = "Notification pushed";
        });
    } else {
        console.log($status);
    }
});

button3.addEventListener('click', () => {
    if($status === 'granted') {
        navigator.serviceWorker.getRegistration().then((reg) => reg.showNotification("This is a persistent notification"));
    }
});