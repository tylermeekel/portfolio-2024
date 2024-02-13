let clocktext = document.getElementById("clocktext");

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

function clockCallback() {
    let now = new Date();
    let month = months[now.getMonth()]

    let seconds = now.getSeconds().toString()

    if (seconds.length < 2) {
        seconds = "0" + seconds
    }

    let mins = now.getMinutes().toString()

    if (mins.length < 2) {
        mins = "0" + mins
    }
    
    let hours = now.getHours().toString()

    if (hours.length < 2) {
        hours = "0" + hours
    }

    let dateformat = `It's ${hours}:${mins}:${seconds} on ${month} ${now.getDay()}, ${now.getFullYear()}`;

    clocktext.innerHTML = dateformat;
}

clockCallback()

setInterval(clockCallback, 1000)