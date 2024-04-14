const weather = (city)=> {
	const url1 = 'https://weather-api138.p.rapidapi.com/weather?city_name=' + city;
	const options2= {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': 'bf4915e747msh926888ebd355b6bp113455jsn95ae94026b6c',
			'X-RapidAPI-Host': 'weather-api138.p.rapidapi.com'
		}
	};

	const api1 = fetch(url1, options2);
	api1.then((response)=> {
		return response.json()
	}).then((response)=> {
		document.querySelector('#cityName').innerHTML = city

		document.querySelector('#temp').innerHTML = ((response.main.temp-273).toFixed(2))+ ` &deg;C`
		document.querySelector('#feels_like').innerHTML = `Feels like ${(response.main.feels_like-273).toFixed(2)}&deg;C`
		document.querySelector('#humidity').innerHTML = `Humidity : ${response.main.humidity}%`
		document.querySelector('#pressure').innerHTML = `Pressure : ${response.main.pressure} Pascal`
		document.querySelector('#temp_max').innerHTML = `Max Temp : ${(response.main.temp_max-273).toFixed(2)}&deg;C`
		document.querySelector('#temp_min').innerHTML = `Min Temp : ${(response.main.temp_min-273).toFixed(2)}&deg;C`
		
		document.querySelector('#latitude').innerHTML = `Latitude : ${response.coord.lat}&deg`
		document.querySelector('#longitude').innerHTML = `Longitude : ${response.coord.lon}&deg`

		document.querySelector('#description').innerHTML = response.weather[0].description
		document.querySelector('#sunrise').innerHTML = `Sunrise : ${response.sys.sunrise}`
		document.querySelector('#sunset').innerHTML = `Sunset : ${response.sys.sunset}`
		document.querySelector('#speed').innerHTML = `Wind Speed : ${response.wind.speed}miles/hr`
		document.querySelector('#direction').innerHTML = `Wind Direction : ${response.wind.deg}&deg`
		return response
	})
}
document.querySelector('#submit').addEventListener('click',(e)=> {
	e.preventDefault()
	let Name = document.getElementById('name').value
	if (Name == '') {
		alert('You should give a city name')
	} else {
		weather(Name)
	}
}
) 
weather('Karachi')


const otherWeather = async()=> {
	let cities = ['Shanghai','Delhi','Seattle','London','Moscow','Paris','Sydney']
	console.log(cities.length)
	for (let i = 0; i < cities.length; i++) {
		const url2 = 'https://weather-api138.p.rapidapi.com/weather?city_name=' + cities[i];
		const options2 = {
			method: 'GET',
			headers: {
				'X-RapidAPI-Key': 'bf4915e747msh926888ebd355b6bp113455jsn95ae94026b6c',
				'X-RapidAPI-Host': 'weather-api138.p.rapidapi.com'
			}
		};

		const api2 = fetch(url2, options2);
		await api2.then((response)=> {
			return response.json()
		}).then((response)=> {
			console.log(response)
			document.querySelector('#W'+(i+1)).innerHTML = response.weather[0].description
			document.querySelector('#T'+(i+1)).innerHTML = ((response.main.temp-273).toFixed(2))+ ` &deg;C`
			document.querySelector('#P'+(i+1)).innerHTML = `Pressure : ${response.main.pressure} Pascal`
			document.querySelector('#H'+(i+1)).innerHTML = `Humidity : ${response.main.humidity}%`
			document.querySelector('#S'+(i+1)).innerHTML = `Wind Speed : ${response.wind.speed}miles/hr`
			document.querySelector('#D'+(i+1)).innerHTML =  `Wind Direction : ${response.wind.deg}&deg`
			document.querySelector('#Long'+(i+1)).innerHTML = `Longitude : ${response.coord.lon}&deg`
			document.querySelector('#Lat'+(i+1)).innerHTML = `Latitude : ${response.coord.lat}&deg`
		})
	}
}

otherWeather()