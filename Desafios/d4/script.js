const image=document.querySelector('.image');
const btn=document.querySelector('.shuffle');

btn.addEventListener('click',()=>{

    let randomDice=Math.floor(Math.random()*6)+1
    image.style.backgroundImage=`url(assets/dice-rol.gif)`;
    console.log(image.backgroundImage);
    setTimeout(()=>{
        image.style.backgroundImage=`url(assets/${randomDice}.png)`;
        
    },500)
    console.log(randomDice);

});