const container = document.querySelector(".container");
const weatherImage = document.querySelector(".weather-box img");
const temperature = document.querySelector(".weather-box .temperature");
const description = document.querySelector(".weather-box .description");
const humidity = document.querySelector(".humidity-percentage");
const windVelocity = document.querySelector(".wind-velocity");
const searchBtn = document.querySelector(".search-box button");
const weather404 = document.querySelector(".weather-404");

searchBtn.addEventListener("click", (e) => {
    
    const APIkey = "2268e313b4bbc604cdf747ec471661ee";
    const search = document.querySelector(".search-box input").value;

    if (search === "") return;

    fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=${APIkey}`
    )
        .then((response) => response.json())
        .then((json) => {
            if (json.cod == "404") {
                container.style.height = "400px";
                weather404.style.display = "block";
                return;
            }
            console.log(json);
            container.style.height = "600px";
            weather404.style.display = "none";
            description.innerHTML = json.weather[0].description;
            humidity.innerHTML = json.main.humidity +" %";
            windVelocity.innerHTML = Math.round(json.wind.speed) + " Km/h";
            temperature.innerHTML = Math.round(json.main.temp) + "<span>ºC</span> ";

            switch (json.weather[0].main) {
                case "Clear":
                    weatherImage.src = "images/clear.png";
                    break;

                case "Thunderstorm":
                    weatherImage.src = "images/thunder.png";
                    break;

                case "Drizzle":
                    weatherImage.src = "images/drizzle.png";
                    break;

                case "Rain":
                    weatherImage.src = "images/rain.png";
                    break;

                case "Clouds":
                    weatherImage.src = "images/cloud.png";
                    break;

                case "Mist":
                    weatherImage.src = "images/mist.png";
                    break;
                case "Smoke":
                    weatherImage.src = "images/haze.png";
                    break;
                case "Haze":
                    weatherImage.src = "images/haze.png";
                    break;
                case "Dust":
                    weatherImage.src = "images/dust.png";
                    break;
                case "Fog":
                    weatherImage.src = "images/fog.png";
                    break;
                case "Sand":
                    weatherImage.src = "images/sand.png";
                    break;
                case "Ash":
                    weatherImage.src = "dust/mist.png";
                    break;
                case"Squall":
                    weatherImage.src = "images/squall.png";
                    break;
                case "Tornado":
                    weatherImage.src = "images/tornado.png";
                    break;

                case "Snow":
                    weatherImage.src = "images/snow.png";
                    break;
                default:
                    weatherImage.src = "";
            }
        });
}

);

