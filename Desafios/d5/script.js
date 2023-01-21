const hours=document.querySelector('.text__hours');
const minutes=document.querySelector('.text__minutes');
const seconds=document.querySelector('.text__seconds');


setInterval(() => {
    const dataH=new Date().getHours();
    const dataM=new Date().getMinutes();
    const dataS=new Date().getSeconds();
    console.log(dataH,dataM,dataS);
    console.log(hours.innerHTML);
    hours.innerHTML=dataH;
    minutes.innerHTML=dataM;
    seconds.innerHTML=dataS;
    
    if (dataH<10) {
        hours.innerHTML='0'+dataH;
    }
    else if(dataM<10){
        minutes.innerHTML='0'+dataM;
    }
    else if(dataS<10){
        seconds.innerHTML='0'+dataS;
    }

}, 1000);
