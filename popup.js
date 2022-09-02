document.addEventListener('DOMContentLoaded', function () {

    var checkPageButton = document.getElementById('checkPage');

    checkPageButton.addEventListener('click', doIt);

});

function doIt(checkPageButton) {
    var formDiv = document.getElementById('formDiv');
    var resultDiv = document.getElementById('resultDiv');

    formDiv.style.display = "none";
    resultDiv.style.display = "block";


    var inputKnock = document.getElementById('inputKnock');
    var addressParts = inputKnock.value.split(' ');
    for (el in addressParts) {
        if (el != 0) {
            host = addressParts[0];
            port = addressParts[el];
            knockJS(host, port);
            resultDiv.innerHTML = resultDiv.innerHTML + "<p>Step [" + el + "]: " + addressParts[0] + " on port: " + addressParts[el] + ": <b class='.button-success'>OK</b></p>"
        }
    }
}


function knockJS(host, port) {
    var socket = new WebSocket("ws://" + host + ":" + port);
    socket.onopen = function () {
        socket.send("hi");
        socket.close();
    };
}

function sleep(ms) {
    var start = new Date().getTime();
    while (new Date() < start + ms) { }
    return false;
}

