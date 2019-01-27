function getWeather() {
	/*var citiesRequest = new XMLHttpRequest();
	citiesRequest.open('GET', "https://benhuggard.github.io/city.list.json");
	citiesRequest.responseType = 'json';
	citiesRequest.onload = function() {
		var cityList = citiesRequest.response;
		let citiesNumber = cityList.length;
		let cityID = 0;

		for (i = 0; i < citiesNumber; i++) {
			if (cityList[i].name == cityName && cityList[i].country == countryCode) {
				cityID = cityList[i].id;
			}
		}
	}

	citiesRequest.send();

	alert(cityID);
	*/
	
	let cityName = $("#cityIn").value;
	let countryCode = $("#countryIn").value;
	var weatherRequest = new XMLHttpRequest();
	let url = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "," + countryCode + "&APPID=6d5243553d565dd23f1086cb7aea4e1d";
	weatherRequest.open('GET', url, true);
	weatherRequest.onload = function() {
		var data = JSON.parse(this.response);
		if (weatherRequest.status >= 200 && weatherRequest.status < 400) {
			let temp = (data.main.temp - 273.15);
			temp = Math.round(temp * 10) / 10;
			let conditions = data.weather[0].main;
			$("#tempResponse").innerHTML = "It is...";
			$("#temp").innerHTML = temp.toString() + " Degrees Celsius and " + conditions;

		}
		else {
			alert('error');
		}
	}
	weatherRequest.send();
	
}

function testForm() {
	let input = $('#textIn').value;
	alert(input);
}

//var cityList = JSON.parse("city.list.json");