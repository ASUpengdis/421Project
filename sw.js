//https://www.youtube.com/watch?v=5JAZcSQ2u1I
//Service workers have to be ran on HTTPS or on localhost
//triggered first when the browser sees that a service worker is registered
self.oninstall = function() {
    //creates a new cache with the name parameter
    caches.open('webNotif').then(function(cache) {
        //add array of strings of relative paths to files w/in application
        cache.addAll(['/','index.html'])
        .then(function() {
            console.log('cached!');
        }).catch((err) => {
            console.log("Error: " + err);
        })
    })
}

self.onactivate = function() {
    console.log("SW activated");
}

self.onfetch = function(event) {
    event.respondWith( //allows you to send a non-network response
        caches.match(event.request)
        .then(function(response){
            if(response){
                return response;
            } else {
                return fetch(event.request);
            }
        })
    )
}

let getVersionPort;
self.addEventListener("message", event => {
    if(event.data && event.data.type === "INIT_PORT") {
        getVersionPort = event.ports[0];
    }
})

self.addEventListener("notificationclick",(event) => {
    
    if(event.action === 'blue') {
        getVersionPort.postMessage({type:"blueType"});

    } else if (event.action === 'red') {
        getVersionPort.postMessage({type:"redType"});
    }
})