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
		$("#clockText")[0].innerHTML = currTime + "AM";
	}
	else {
		let currTime = hours + ":" + mins;
		$("#clockText")[0].innerHTML = currTime + "PM";
	}
}

function cycleRight() {
	var apps = $(".app"); 

	if (currentApp != apps.length - 1) {
		apps[currentApp].style.display = "none";
		apps[currentApp + 1].style.display = "inline-block";
		currentApp++;
		$("#chevLeft")[0].style.display = "inline-block";
		if (currentApp == apps.length - 1) {
			$("#chevRight")[0].style.display = "none";
		}
	}
}

function cycleLeft() {
	var apps = $(".app"); 

	if (currentApp != 0) {
		apps[currentApp].style.display = "none";
		apps[currentApp - 1].style.display = "inline-block";
		currentApp--;
		$("#chevRight")[0].style.display = "inline-block";
		if (currentApp == 0) {
			$("#chevLeft")[0].style.display = "none";
		}
	}
}


setInterval(SetClock, 1000);
var currentApp = 0;
