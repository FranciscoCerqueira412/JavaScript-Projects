const container = document.querySelector(".container");
const weatherImage = document.querySelector(".weather-box img");
const temperature = document.querySelector(".weather-box .temperature");
const description = document.querySelector(".weather-box .description");
const humidity = document.querySelector(".humidity-percentage");
const windVelocity = document.querySelector(".wind-velocity");
const searchBtn = document.querySelector(".search-box button");
const weather404 = document.querySelector(".weather-404");
const country = document.querySelector(".country");
const streetview = document.querySelector(".streetview iframe");
const street = document.querySelector(".streetview");
const time = document.querySelector(".time p");
const dayNight = document.querySelector(".time i");
const dn = document.querySelector(".time");
const itemContainer=document.getElementById("forecast");


function getWeather(){
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
                country.style.display="none";
                streetview.style.display="none";
                weatherImage.style.display="none";
                street.style.display="none";
                time.style.opacity="0%";
                dn.style.display="none";
                itemContainer.style.display="none";
                return;
            }
            //console.log(json);
            container.style.height = "600px";
            weather404.style.display = "none";
            weatherImage.style.display="block";
            description.innerHTML = json.weather[0].description;
            humidity.innerHTML = json.main.humidity +" %";
            windVelocity.innerHTML = Math.round(json.wind.speed) + " Km/h";
            temperature.innerHTML = Math.round(json.main.temp) + "<span>ºC</span> ";
            country.innerHTML = json.sys.country;
            country.style.display="block";
            const mapsLat=json.coord.lat;
            const mapsLon=json.coord.lon;
            streetview.style.display="block";
            street.style.display="block";
            time.style.opacity="100%";
            dn.style.opacity="100%";
            dn.style.display="flex";
            itemContainer.style.display="flex";
            

                const timeElapsed = Date.now();
                const hourstoday = new Date(timeElapsed).getUTCHours();
                const minutestoday = new Date(timeElapsed).getUTCMinutes();
                let hoursCountry=Math.floor(Number(hourstoday)+(json.timezone/3600))
                
                if (hoursCountry=='-9') {
                    console.log(Math.floor(time.innerHTML="15"+":"+minutestoday))
                }
                else if (hoursCountry=='-8') {
                    console.log(Math.floor(time.innerHTML="16"+":"+minutestoday))
                
                }
                else if (hoursCountry=='-7') {
                    console.log(Math.floor(time.innerHTML="17"+":"+minutestoday))
                
                }
                else if (hoursCountry=='-6') {
                    console.log(Math.floor(time.innerHTML="18"+":"+minutestoday))
                
                }
                else if (hoursCountry=='-5') {
                    console.log(Math.floor(time.innerHTML="19"+":"+minutestoday))
                
                }
                else if (hoursCountry=='-4') {
                    console.log(Math.floor(time.innerHTML="20"+":"+minutestoday))
                
                }
                else if(hoursCountry=='-3'){
                    console.log(Math.floor(time.innerHTML="21"+":"+minutestoday))
                }
                else if(hoursCountry=='-2'){
                    console.log(Math.floor(time.innerHTML="22"+":"+minutestoday))
                }
                else if(hoursCountry=='-1'){
                    console.log(Math.floor(time.innerHTML="23"+":"+minutestoday))
                }
                else if(hoursCountry=='24'){
                    console.log(Math.floor(time.innerHTML="00"+":"+minutestoday))
                }

                else{
                    Math.floor(time.innerHTML=formatHours(hoursCountry)+":"+formatHours(minutestoday))
                }

                //add 0 before number if less than 10
                function formatHours(time){
                    return time < 10 ?(`0${time}`) :time;
                }

                if (hoursCountry>='6'&&hoursCountry<'20') {
                    dayNight.className="fa-solid fa-sun";
                }
                else{
                    dayNight.className="fa-solid fa-moon";
                }


            streetview .src="https://www.google.com/maps/embed/v1/view?key=AIzaSyBksX_TcLukUuLk_KlR7dsru24SWb3EBGg&&&center="+mapsLat+","+mapsLon+"&zoom=11&maptype=satellite"





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

function fiveDaysWeather(){

    const APIkey = "2268e313b4bbc604cdf747ec471661ee";
    const search = document.querySelector(".search-box input").value;
    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${search}&units=metric&appid=${APIkey}`)
    .then(response => response.json())
    .then(data => {
      const forecast = [];
      for (let i = 0; i < data.list.length; i++) {
        const forecastItem = data.list[i];
        const date = forecastItem.dt_txt.split(' ')[0];
        if (!forecast[date]) {
          forecast[date] = [];
        }
        forecast[date].push(forecastItem);
      }
      console.log(forecast);

            
            const firstDate = Object.keys(forecast)[0];
            const secondDate = Object.keys(forecast)[1];
            const thirdDate = Object.keys(forecast)[2];
            const fourthDate = Object.keys(forecast)[3];
            const fifthDate = Object.keys(forecast)[4];
            const zeroDate = Object.keys(forecast)[5];

            
            const firstDateForecast = forecast[firstDate];
            const secondDateForecast = forecast[secondDate];
            const thirdDateForecast = forecast[thirdDate];
            const fourthDateForecast = forecast[fourthDate];
            const fifthDateForecast = forecast[fifthDate];
            const zeroDateForecast = forecast[zeroDate];



            let icon1 ='';
            const custom1=firstDateForecast[0];
            const tempMAX_1 = custom1.main.temp_max;
            const tempMIN_1 = custom1.main.temp_min;
            icon1 = custom1.weather[0].main;

            let icon2 ='';
            const custom2=secondDateForecast[0];
            const tempMAX_2 = custom2.main.temp_max;
            const tempMIN_2 = custom2.main.temp_min;
            icon2 = custom2.weather[0].main;

            let icon3 ='';
            const custom3=thirdDateForecast[0];
            const tempMAX_3 = custom3.main.temp_max;
            const tempMIN_3 = custom3.main.temp_min;
            icon3 = custom3.weather[0].main;

            let icon4 ='';
            const custom4=fourthDateForecast[0];
            const tempMAX_4 = custom4.main.temp_max;
            const tempMIN_4 = custom4.main.temp_min;
            icon4 = custom4.weather[0].main;

            let icon5 ='';
            const custom5=fifthDateForecast[0];
            const tempMAX_5 = custom5.main.temp_max;
            const tempMIN_5 = custom5.main.temp_min;
            icon5 = custom5.weather[0].main;

            let icon0 ='';
            const custom0=zeroDateForecast[0];
            const tempMAX_0 = custom0.main.temp_max;
            const tempMIN_0 = custom0.main.temp_min;
            icon0 = custom0.weather[0].main;

            

            const date1=firstDate.substring(10,8).split('-').reverse().join('-');
            const date2=secondDate.substring(10,8).split('-').reverse().join('-');
            const date3=thirdDate.substring(10,8).split('-').reverse().join('-');
            const date4=fourthDate.substring(10,8).split('-').reverse().join('-');
            const date5=fifthDate.substring(10,8).split('-').reverse().join('-');
            const date0=zeroDate.substring(10,8).split('-').reverse().join('-');


            const itemImgicon1=document.querySelector(".two img");
            const itemImgicon2=document.querySelector(".three img");
            const itemImgicon3=document.querySelector(".four img");
            const itemImgicon4=document.querySelector(".five img");
            const itemImgicon5=document.querySelector(".six img");
            const itemImgicon0=document.querySelector(".zero img");

            
            const day2=document.querySelector(".two p");
            const day3=document.querySelector(".three p");
            const day4=document.querySelector(".four p");
            const day5=document.querySelector(".five p");
            const day6=document.querySelector(".six p");
            const day0=document.querySelector(".zero p");

            
            const tempM2=document.querySelector(".two span");
            const tempM3=document.querySelector(".three span");
            const tempM4=document.querySelector(".four span");
            const tempM5=document.querySelector(".five span");
            const tempM6=document.querySelector(".six span");
            const tempM0=document.querySelector(".zero span");

            const ih1=document.querySelector(".itemHour ih1");
            const ih2=document.querySelector(".itemHour ih2");
            const ih3=document.querySelector(".itemHour ih3");
            const ih4=document.querySelector(".itemHour ih4");
            const ih5=document.querySelector(".itemHour ih5");
            const ih6=document.querySelector(".itemHour ih6");




        
            console.log(`Date: ${date1}, Min temp: ${tempMIN_1}, Max temp: ${tempMAX_1}`);
            console.log(`Date: ${date2}, Min temp: ${tempMIN_2}, Max temp: ${tempMAX_2}`);
            console.log(`Date: ${date3}, Min temp: ${tempMIN_3}, Max temp: ${tempMAX_3}`);
            console.log(`Date: ${date4}, Min temp: ${tempMIN_4}, Max temp: ${tempMAX_4}`);
            console.log(`Date: ${date5}, Min temp: ${tempMIN_5}, Max temp: ${tempMAX_5}`);
            console.log(`Date: ${date0}, Min temp: ${tempMIN_0}, Max temp: ${tempMAX_0}`);




            day2.innerHTML=date1;
            day3.innerHTML=date2;
            day4.innerHTML=date3;
            day5.innerHTML=date4;
            day6.innerHTML=date5;
            day0.innerHTML=date0;
            tempM2.innerHTML=Math.ceil(tempMAX_1)+"º"+"&nbsp;&nbsp;"+Math.floor(tempMIN_1)+"º";
            tempM3.innerHTML=Math.ceil(tempMAX_2)+"º"+"&nbsp;&nbsp;"+Math.floor(tempMIN_2)+"º";
            tempM4.innerHTML=Math.ceil(tempMAX_3)+"º"+"&nbsp;&nbsp;"+Math.floor(tempMIN_3)+"º";
            tempM5.innerHTML=Math.ceil(tempMAX_4)+"º"+"&nbsp;&nbsp;"+Math.floor(tempMIN_4)+"º";
            tempM6.innerHTML=Math.ceil(tempMAX_5)+"º"+"&nbsp;&nbsp;"+Math.floor(tempMIN_5)+"º";
            tempM0.innerHTML=Math.ceil(tempMAX_0)+"º"+"&nbsp;&nbsp;"+Math.floor(tempMIN_0)+"º";


            console.log(icon1,icon2,icon3,icon4,icon5,icon0);



            function it1(){
                switch (icon1) {
                    case "Clear":
                        itemImgicon1.src="images/clear.png";
                        break;
            
                    case "Thunderstorm":
                        itemImgicon1.src = "images/thunder.png";
                        break;
            
                    case "Drizzle":
                        itemImgicon1.src = "images/drizzle.png";
                        break;
            
                    case "Rain":
                        itemImgicon1.src = "images/rain.png";
                        break;
            
                    case "Clouds":
                        itemImgicon1.src = "images/cloud.png";
                        break;
            
                    case "Mist":
                        itemImgicon1.src = "images/mist.png";
                        break;
                    case "Smoke":
                        itemImgicon1.src = "images/haze.png";
                        break;
                    case "Haze":
                        itemImgicon1.src = "images/haze.png";
                        break;
                    case "Dust":
                        itemImgicon1.src = "images/dust.png";
                        break;
                    case "Fog":
                        itemImgicon1.src = "images/fog.png";
                        break;
                    case "Sand":
                        itemImgicon1.src = "images/sand.png";
                        break;
                    case "Ash":
                        itemImgicon1.src = "dust/mist.png";
                        break;
                    case"Squall":
                        itemImgicon1.src = "images/squall.png";
                        break;
                    case "Tornado":
                        itemImgicon1.src = "images/tornado.png";
                        break;
            
                    case "Snow":
                        itemImgicon1.src = "images/snow.png";
                        break;
                    default:
                        itemImgicon1.src = "";
                }
            }
            function it2(){
                switch (icon2) {
                    case "Clear":
                        itemImgicon2.src="images/clear.png";
                        break;
            
                    case "Thunderstorm":
                        itemImgicon2.src = "images/thunder.png";
                        break;
            
                    case "Drizzle":
                        itemImgicon2.src = "images/drizzle.png";
                        break;
            
                    case "Rain":
                        itemImgicon2.src = "images/rain.png";
                        break;
            
                    case "Clouds":
                        itemImgicon2.src = "images/cloud.png";
                        break;
            
                    case "Mist":
                        itemImgicon2.src = "images/mist.png";
                        break;
                    case "Smoke":
                        itemImgicon2.src = "images/haze.png";
                        break;
                    case "Haze":
                        itemImgicon2.src = "images/haze.png";
                        break;
                    case "Dust":
                        itemImgicon2.src = "images/dust.png";
                        break;
                    case "Fog":
                        itemImgicon2.src = "images/fog.png";
                        break;
                    case "Sand":
                        itemImgicon2.src = "images/sand.png";
                        break;
                    case "Ash":
                        itemImgicon2.src = "dust/mist.png";
                        break;
                    case"Squall":
                        itemImgicon2.src = "images/squall.png";
                        break;
                    case "Tornado":
                        itemImgicon2.src = "images/tornado.png";
                        break;
            
                    case "Snow":
                        itemImgicon2.src = "images/snow.png";
                        break;
                    default:
                        itemImgicon2.src = "";
                }
            }
            function it3(){
                switch (icon3) {
                    case "Clear":
                        itemImgicon3.src="images/clear.png";
                        break;
            
                    case "Thunderstorm":
                        itemImgicon3.src = "images/thunder.png";
                        break;
            
                    case "Drizzle":
                        itemImgicon3.src = "images/drizzle.png";
                        break;
            
                    case "Rain":
                        itemImgicon3.src = "images/rain.png";
                        break;
            
                    case "Clouds":
                        itemImgicon3.src = "images/cloud.png";
                        break;
            
                    case "Mist":
                        itemImgicon3.src = "images/mist.png";
                        break;
                    case "Smoke":
                        itemImgicon3.src = "images/haze.png";
                        break;
                    case "Haze":
                        itemImgicon3.src = "images/haze.png";
                        break;
                    case "Dust":
                        itemImgicon3.src = "images/dust.png";
                        break;
                    case "Fog":
                        itemImgicon3.src = "images/fog.png";
                        break;
                    case "Sand":
                        itemImgicon3.src = "images/sand.png";
                        break;
                    case "Ash":
                        itemImgicon3.src = "dust/mist.png";
                        break;
                    case"Squall":
                        itemImgicon3.src = "images/squall.png";
                        break;
                    case "Tornado":
                        itemImgicon3.src = "images/tornado.png";
                        break;
            
                    case "Snow":
                        itemImgicon3.src = "images/snow.png";
                        break;
                    default:
                        itemImgicon3.src = "";
                }
            }
            function it4(){
                switch (icon4) {
                    case "Clear":
                        itemImgicon4.src="images/clear.png";
                        break;
            
                    case "Thunderstorm":
                        itemImgicon4.src = "images/thunder.png";
                        break;
            
                    case "Drizzle":
                        itemImgicon4.src = "images/drizzle.png";
                        break;
            
                    case "Rain":
                        itemImgicon4.src = "images/rain.png";
                        break;
            
                    case "Clouds":
                        itemImgicon4.src = "images/cloud.png";
                        break;
            
                    case "Mist":
                        itemImgicon4.src = "images/mist.png";
                        break;
                    case "Smoke":
                        itemImgicon4.src = "images/haze.png";
                        break;
                    case "Haze":
                        itemImgicon4.src = "images/haze.png";
                        break;
                    case "Dust":
                        itemImgicon4.src = "images/dust.png";
                        break;
                    case "Fog":
                        itemImgicon4.src = "images/fog.png";
                        break;
                    case "Sand":
                        itemImgicon4.src = "images/sand.png";
                        break;
                    case "Ash":
                        itemImgicon4.src = "dust/mist.png";
                        break;
                    case"Squall":
                        itemImgicon4.src = "images/squall.png";
                        break;
                    case "Tornado":
                        itemImgicon4.src = "images/tornado.png";
                        break;
            
                    case "Snow":
                        itemImgicon4.src = "images/snow.png";
                        break;
                    default:
                        itemImgicon4.src = "";
                }
            }
            function it5(){
                switch (icon5) {
                    case "Clear":
                        itemImgicon5.src="images/clear.png";
                        break;
            
                    case "Thunderstorm":
                        itemImgicon5.src = "images/thunder.png";
                        break;
            
                    case "Drizzle":
                        itemImgicon5.src = "images/drizzle.png";
                        break;
            
                    case "Rain":
                        itemImgicon5.src = "images/rain.png";
                        break;
            
                    case "Clouds":
                        itemImgicon5.src = "images/cloud.png";
                        break;
            
                    case "Mist":
                        itemImgicon5.src = "images/mist.png";
                        break;
                    case "Smoke":
                        itemImgicon5.src = "images/haze.png";
                        break;
                    case "Haze":
                        itemImgicon5.src = "images/haze.png";
                        break;
                    case "Dust":
                        itemImgicon5.src = "images/dust.png";
                        break;
                    case "Fog":
                        itemImgicon5.src = "images/fog.png";
                        break;
                    case "Sand":
                        itemImgicon5.src = "images/sand.png";
                        break;
                    case "Ash":
                        itemImgicon5.src = "dust/mist.png";
                        break;
                    case"Squall":
                        itemImgicon5.src = "images/squall.png";
                        break;
                    case "Tornado":
                        itemImgicon5.src = "images/tornado.png";
                        break;
            
                    case "Snow":
                        itemImgicon5.src = "images/snow.png";
                        break;
                    default:
                        itemImgicon5.src = "";
                }
            }
            function it0(){
                switch (icon0) {
                    case "Clear":
                        itemImgicon0.src="images/clear.png";
                        break;
            
                    case "Thunderstorm":
                        itemImgicon0.src = "images/thunder.png";
                        break;
            
                    case "Drizzle":
                        itemImgicon0.src = "images/drizzle.png";
                        break;
            
                    case "Rain":
                        itemImgicon0.src = "images/rain.png";
                        break;
            
                    case "Clouds":
                        itemImgicon0.src = "images/cloud.png";
                        break;
            
                    case "Mist":
                        itemImgicon0.src = "images/mist.png";
                        break;
                    case "Smoke":
                        itemImgicon0.src = "images/haze.png";
                        break;
                    case "Haze":
                        itemImgicon0.src = "images/haze.png";
                        break;
                    case "Dust":
                        itemImgicon0.src = "images/dust.png";
                        break;
                    case "Fog":
                        itemImgicon0.src = "images/fog.png";
                        break;
                    case "Sand":
                        itemImgicon0.src = "images/sand.png";
                        break;
                    case "Ash":
                        itemImgicon0.src = "dust/mist.png";
                        break;
                    case"Squall":
                        itemImgicon0.src = "images/squall.png";
                        break;
                    case "Tornado":
                        itemImgicon0.src = "images/tornado.png";
                        break;
            
                    case "Snow":
                        itemImgicon0.src = "images/snow.png";
                        break;
                    default:
                        itemImgicon0.src = "";
                }
            }
            it1();
            it2();
            it3();
            it4();
            it5();
            it0();

     
    });
  
}

searchBtn.addEventListener("click", (e) => {
    getWeather();
    fiveDaysWeather();
}

);

const search = document.querySelector(".search-box input")
search.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
    getWeather();
    fiveDaysWeather();
          }

      
  });