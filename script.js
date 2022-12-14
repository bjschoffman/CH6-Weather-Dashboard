var APIKey = "8dbfa08efcd0c8dc6c3dd772443221d8";

var btn = document.querySelector(".btn");

var curDate = document.querySelector("#currentDate");



btn.addEventListener("click", function(event) {
  event.preventDefault()
  var cityName = document.getElementById("putCity").value
  getForecast(cityName)
  getFiveDayForecast(cityName)
});  

function getForecast(city) {
  var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey + "&units=imperial";

  fetch(queryURL)
    .then(response => response.json())
    .then(function (data) {
      console.log("Api",data)
      document.querySelector("#cityName").textContent = city
      document.querySelector("#currentIcon").setAttribute("src",`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`)
      document.querySelector("#tempToday").textContent = data.main.temp
      document.querySelector("#humidityToday").textContent =  data.main.humidity
      document.querySelector("#windSpeedToday").textContent = data.wind.speed;

    })
 


}

function getFiveDayForecast(city) {
  var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=" + APIKey + "&units=imperial";

  fetch(queryURL)
    .then(response => response.json())
    .then(function (data) {
      console.log("Api",data)
      let j = 1
      for(let i = 0; i < data.list.length; i=i+8){
      document.querySelector("#Date-" +j).textContent = data.list[i].dt_txt
      document.querySelector("#Icon-"+j).setAttribute("src",`https://openweathermap.org/img/wn/${data.list[i].weather[0].icon}@2x.png`)
      document.querySelector("#tempDay-"+j).textContent = data.list[i].main.temp
      document.querySelector("#humidityDay-"+j).textContent =  data.list[i].main.humidity
      document.querySelector("#windSpeedDay-"+j).textContent = data.list[i].wind.speed;
    j++;
    }
    })
 


}
