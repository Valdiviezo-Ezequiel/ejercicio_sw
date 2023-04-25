console.log("SW: i am service worker");

self.addEventListener('fetch', event => {
    console.log("SW: ", event.request.url);
    console.log(event);
})

fetch('https://reqres.in/api/users')
    .then(Response => Response.json())
    .then(json => console.log(json));