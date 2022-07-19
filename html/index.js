var socket = io.connect('192.168.0.168:3000');

document.addEventListener("DOMContentLoaded", onDomReadyHandler())

function onDomReadyHandler(event) {
    socket.on('carMessage', (data) => {
        var revs = document.getElementsByTagName('canvas')[0];
        var speedo = document.getElementsByTagName('canvas')[1];
        speedo.setAttribute('data-value', data.speed)
        revs.setAttribute('data-value', data.revs)
        console.log(data)
    })
}