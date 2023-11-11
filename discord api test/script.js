function message() {
    let name = document.getElementById("nameb").value
    let message = document.getElementById("message").value
}

const webhook = "https://discord.com/api/webhooks/1172804988175659030/taAcm5LJk3FrBn5kZSU1HjiwJopBG-c_NCacwmzvrUBps-R5KOTaWuFO5xiqffiQiXIn";
const contents = `Name: ${nameb}/nMessage: ${message}`;
const request = new XMLHttpRequest();
request.open("POST", webhook);
request.setRequestHeader('Content-type', 'application/json');
const params = {
    content: contents
}
request.send(JSON.stringify(params))
