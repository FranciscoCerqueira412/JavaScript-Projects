const imageArray = ["0", "1", "2", "3", "4"];
const imgSpot=document.getElementById("imgSpot");
const buttons=document.querySelectorAll('.Btn');

let counter=0;

buttons.forEach( function(button){
    button.addEventListener('click',function(e){
        console.log(imageArray[counter])

        if(button.classList.contains('rightBtn')){
            counter++
            if (counter>imageArray.length -1) {
                counter=0
            }
            imgSpot.style.backgroundImage=`url('./imagens/${imageArray[counter]}.jpeg')`;
        }

        if(button.classList.contains('leftBtn')){
            counter--
            if (counter<0) {
                counter=imageArray.length - 1
            }
            imgSpot.style.backgroundImage=`url('./imagens/${imageArray[counter]}.jpeg')`;
        }
    })





});