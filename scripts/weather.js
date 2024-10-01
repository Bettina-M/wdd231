
const temp = document.querySelector('#current-temp');

const weatherIcon = document.querySelector("#weather-icon");

const caption = document.querySelector("figcaption");

const apiKey = '75da35192d5ccfd5d14621c16f99fb0e';

const url =`https://api.openweathermap.org/data/2.5/weather?lat=49.75&lon=6.64&units=metric&appid=${apiKey}`;

async function apiFetch(){
   try{
    const response = await fetch(url);
    if(response.ok){
        const data = await response.json();
        console.log(data);
        displayResults(data);
    } else{
        throw Error(await response.text());
    }

    }catch(error){
    console.log(error);
   }
}

apiFetch();

function displayResults(data){
    temp.innerHTML = `${data.main.temp}&deg;C`;
   
    let iconCode = data.weather[0].icon;

    let iconUrl= `https://openweathermap.org/img/w/${iconCode}.png`;

    let description = data.weather[0].description;
    
    weatherIcon.setAttribute('src',iconUrl);
    weatherIcon.setAttribute('alt', 'weather icon');
    caption.textContent = description;
};