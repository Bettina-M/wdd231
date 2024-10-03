// main.js
 const currentWeather = document.getElementById("current-weather");

 const foreCastWeather = document.getElementById('forecast');

 

 const apiKey = '75da35192d5ccfd5d14621c16f99fb0e';

const url =`https://api.openweathermap.org/data/2.5/weather?lat=-1.29&lon=36.82&units=metric&appid=${apiKey}`;

const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=-1.29&lon=36.82&units=metric&appid=${apiKey}`;

 async function apiFetch () {
    try{
        const response = await fetch(url);
        
        if(response.ok){
            
           const data = await response.json();

            console.log(data);

            showWeather(data);

            //forecast weather

            const forecastResponse = await fetch(forecastUrl);

            if(forecastResponse.ok){
                
                const data2 = await forecastResponse.json();

                console.log(data2);

                showForecast(data2);
            }
        }else{
            throw Error(await response.text());
        }

    }catch (error){
    console.log(error);
    }

 }


 function showWeather(data){

    currentWeather.innerHTML = '';

    
        const weather = document.createElement('section');

        const weatherIcon = document.createElement('img');
        const temp = document.createElement('p');
        const description = document.createElement('p');
        const high = document.createElement('p');
        const low = document.createElement('p');
        const humidity = document.createElement('p');

        let iconCode = data.weather[0].icon;

        let iconUrl= `https://openweathermap.org/img/w/${iconCode}.png`;


        weatherIcon.setAttribute('src',iconUrl);
        weatherIcon.setAttribute('alt',`Icon of ${data.weather[0].description}`);
        
        description.innerHTML = `${data.weather[0].description}`;
        
        temp.innerHTML = `Temp ${data.main.temp}&degC`;
        
        high.innerHTML = `High ${data.main.temp_max}&degC`;
        
        low.innerHTML = `Low ${data.main.temp_min}&degC`;

        humidity.innerHTML = `Humidity ${data.main.humidity}%`;

        weather.appendChild(weatherIcon);

        weather.appendChild(temp);

        weather.appendChild(description);

        weather.appendChild(high);

        weather.appendChild(low);

        weather.appendChild(humidity);

        currentWeather.appendChild(weather);
    
 }

 function showForecast(data2){
    foreCastWeather.innerHTML = '';

    const forecastList = document.createElement('ul');

    for(let i=0; i<3; i++){

        let day = data2.list[i * 8];

        const forecastItem = document.createElement('li');

        const date = new Date(day.dt*1000);

        const dateString = date.toLocaleDateString('en-US', {
            weekday: 'short'  // Get the abbreviated day of the week (e.g., "Fri")
          });

        const temp = day.main.temp;

        
        const showDate = document.createElement('p');

        const temperature = document.createElement('p');

       
        showDate.innerHTML= `${dateString}`;

        temperature.innerHTML = `${temp}&deg;C`;

        
        forecastItem.appendChild(showDate);

        forecastItem.appendChild(temperature);

        forecastList.appendChild(forecastItem);

    }
        foreCastWeather.appendChild(forecastList);

 }

 document.addEventListener('DOMContentLoaded', ()=>{

    apiFetch();
 });


