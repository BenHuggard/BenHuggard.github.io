function getWeather() {
	var request = new XMLHttpRequest();
	let cityID = document.getElementById("textIn").value;
	let url = "https://api.openweathermap.org/data/2.5/forecast?id=" + cityID + "&APPID=6d5243553d565dd23f1086cb7aea4e1d";
	request.open('GET', url, true);
	request.onload = function() {
		var data = JSON.parse(this.response);
		if (request.status >= 200 && request.status < 400) {
			let temp = (data.list[0].main.temp - 273.15);
			temp = Math.round(temp * 10) / 10;
			document.getElementById("temp").innerHTML = temp.toString() + " Degrees Celsius";
		}
		else {
			alert('error');
		}
	}
	request.send();
}

function testForm() {
	let input = document.getElementById('textIn').value;
	alert(input);
}