function ChangeTime(newTime) {
	timeLeft = newTime * 60;
	currentSetting = newTime;
	newTime = newTime + ":" + "00";
	$("#currentTime")[0].innerHTML = newTime;
	stopped = true;
}

function UpdateTimer() {
	if(timeLeft == 0 && !alarmOff) {
		$("#headTitle")[0].innerHTML = "Times Up!";
		alert("Time is Up!");
		alarmOff = true;
	}
	else if(!stopped && !alarmOff) {
		timeLeft -= 1;
		var minutes = Math.floor(timeLeft / 60);
		var seconds = Math.floor(timeLeft % 60);
		if (seconds < 10) {
			var newTime = minutes + ":" + "0" + seconds;
		}
		else {
			var newTime = minutes + ":" + seconds;
		}
		$("#currentTime")[0].innerHTML = newTime;
	}
}

function Start() {
	$("#headTitle")[0].innerHTML = "Welcome";
	stopped = false;
	alarmOff = false;
}

function Stop() {
	stopped = true;
}

function Reset() {
	ChangeTime(currentSetting);
}

var stopped = true;
var currentSetting = 25;
var timeLeft = 1500;
var alarmOff = false;

setInterval(UpdateTimer, 1000);