setInterval(displayDate, 1000);

function displayDate() {
    let d = new Date();
    document.getElementById("hours").innerHTML = d.getHours();
    document.getElementById("minutes").innerHTML = d.getMinutes();
    document.getElementById("seconds").innerHTML = d.getSeconds();
}