const hours=document.querySelector(".hours")
const minutes=document.querySelector(".minutes")
const seconds=document.querySelector(".seconds")


let deg=6;
setInterval(()=>{
    let data=new Date();

    let dataMilliseconds=data.getMilliseconds()*deg
    let dateHour=data.getHours()*30;
    let dateMinute=data.getMinutes()*deg;
    let dateSecond=data.getSeconds()*deg; 



    hours.style.transform=`translate(50%, -50%) rotate(${dateHour}deg)`;
    minutes.style.transform=`translate(50%, -50%) rotate(${dateMinute}deg)`;
    seconds.style.transform=`translate(50%, -50%) rotate(${dateSecond}deg)`;


    console.log(dateHour,dateMinute,dateSecond);


},100)
