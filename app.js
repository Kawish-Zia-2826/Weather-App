 const apiKey = "f5eaf05fd1247a52d2fb06e7d12405a0"
const apiURL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="


// https://api.openweathermap.org/data/2.5/weather?q=karachi&units=metric&appid=f5eaf05fd1247a52d2fb06e7d12405a0

const searchBox = $("#searchBox")
const searchBtn =$("#searchBtn")
const weather_icon = $("#weather-icon")


async function checkWeather(city) {
  const response = await fetch(apiURL + city + `&appid=${apiKey}`)

  if (response.status == 404) {
    $("#error").css("display", "block");
    $(".weather").css("display", "none");
    
  }else{
  var data = await response.json()
  console.log(data);
  
$('.city').html(data.name);
$('.temp').html(Math.round( data.main.temp) + "°c");
$('.humidity').html(data.main.humidity + "%");
$('.wind').html(data.wind.speed + "km/h");

//  data.weather[0].main

if (data.weather[0].main == "Clear") {
  weather_icon.src = './images/clear.png';
} else if (data.weather[0].main == "Rain") {
  weather_icon.src = './images/rain.png';
} else if (data.weather[0].main == "Mist") {
  weather_icon.src = './images/mist.png';
} else if (data.weather[0].main == "Snow") {
  weather_icon.src = './images/snow.png';
} else if (data.weather[0].main == "Wind") {
  weather_icon.src = './images/wind.png';
} else if (data.weather[0].main == "Clouds") {
  weather_icon.src = './images/clouds.png';
}else if (data.weather[0].main == "Humidity") {
  weather_icon.src = './images/humidity.png';
}


$('.weather').css("display", "block");
  }
}

// searchBtn.addEventListener("click", () => {
//   const city = searchBox.value;\
//   checkWeather(city); 
//   console.log(checkWeather(city));
//           
// });


$(searchBtn).click(function () { 
  const city = $(searchBox).val(); 
  checkWeather(city); 
  console.log(checkWeather(city));
  
});
// weather_icon.src = './images/rain.png'








