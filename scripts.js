setInterval(SetClock, 1000);

function SetClock() {
	var d = new Date();
	var hours = d.getHours();
	if (hours < 10) {
		hours = "0" + hours;
	}
	var mins = d.getMinutes();
	if (mins < 10) {
		mins = "0" + mins;
	}
	let currTime = hours + ":" + mins;
	document.getElementById("clockText").innerHTML = currTime;
}

