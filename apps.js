function getWeather() {	
	let cityName = document.getElementById("cityIn").value;
	let countryCode = document.getElementById("countryIn").value;
	var weatherRequest = new XMLHttpRequest();
	let url = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "," + countryCode + "&APPID=6d5243553d565dd23f1086cb7aea4e1d";
	weatherRequest.open('GET', url, true);
	weatherRequest.onload = function() {
		var data = JSON.parse(this.response);
		if (weatherRequest.status >= 200 && weatherRequest.status < 400) {
			let temp = (data.main.temp - 273.15);
			temp = Math.round(temp * 10) / 10;
			let conditions = data.weather[0].main;
			document.getElementById("tempResponse").innerHTML = "It is...";
			if (conditions == "clear") {
				document.getElementById("temp").innerHTML = temp.toString() + " Degrees Celsius and " + conditions;
			}
			else {
				document.getElementById("temp").innerHTML = temp.toString() + " Degrees Celsius with " + conditions;
			}
			

		}
		else {
			alert('error');
		}
	}
	weatherRequest.send();
	
}

function getNewQuotes() {
	var quoteRequest = new XMLHttpRequest();
	//let url = "http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1";
	let url = "https://andruxnet-random-famous-quotes.p.rapidapi.com/?count=1&cat=famous";
	quoteRequest.open('GET', url, true);
	quoteRequest.setRequestHeader("X-RapidAPI-Key", "55eb3c7e49msh6d1b5051236a0dbp142337jsn6d30a4a7c064");
	quoteRequest.onload = function() {
		var data = JSON.parse(this.response);
		if (quoteRequest.status >= 200 && quoteRequest.status < 400) {
			 let newQuote = data[0].quote;
			 let newAuth = data[0].author;
			 if (newAuth == undefined) {
			 	newAuth = "Anonymous";
			 }
			 document.getElementById("quoteBody").innerHTML = ('"' + newQuote + '"' + "   -" + newAuth);
		}
		else {
			alert(error);
		}
	}
	quoteRequest.send();
}

function testForm() {
	let input = document.getElementById('textIn').value;
	alert(input);
}

//var cityList = JSON.parse("city.list.json");