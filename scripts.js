setInterval(SetClock, 1000);

function SetClock() {
	var d = new Date();
	let hours = d.getHours();
	let mins = d.getMinutes();
	let currTime = "error";
	if (mins < 10) {
		mins = "0" + mins;
	}
	if (hours < 10) {
		hours = "0" + hours;
		let currTime = hours + ":" + mins;
		document.getElementById("clockText").innerHTML = currTime + "AM";
	}
	else {
		let currTime = hours + ":" + mins;
		document.getElementById("clockText").innerHTML = currTime + "PM";
	}
}

