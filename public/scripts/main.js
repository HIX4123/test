function youtube() {
    alert("youtube");
    var request = require("request");
    var options = {
        method: "GET",
        url: "https://www.googleapis.com/youtube/v3/search?key=AIzaSyBbyMgSvazysCRdXDyG8AMzuC1kCFO1NGA&q=test",
        headers: {},
    };
    request(options, function (error, response) {
        if (error) throw new Error(error);
        console.log(response.body);
    });
}

alert("main.js");
let log = [];

function func1() {
    event.preventDefault();
    alert("func1");

    let key = document.getElementById("key").value;
    let target = document.getElementById("target").value;
    log.unshift({
        time: new Date().toLocaleString(),
        key: key,
        target: target,
    });

    let table = document.getElementById("log");
    let tr = document.createElement("tr");
    let td1 = document.createElement("td");
    td1.innerHTML = log[0]["time"];
    let td2 = document.createElement("td");
    td2.innerHTML = log[0]["key"];
    let td3 = document.createElement("td");
    td3.innerHTML = log[0]["target"];
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    table.prepend(tr);

    alert(log[0].target);
    if (log[0].target == "youtube") {
        youtube();
    }
}
