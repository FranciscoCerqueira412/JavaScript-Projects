const btn__add=document.querySelector('.plus');
const btn__minus=document.querySelector('.minus');
const btn__reset=document.querySelector('.btn-reset');
const numb=document.querySelector('.numb');

let counter=0;
btn__add.addEventListener('click',() =>{
    counter++;
    numb.innerHTML=counter;

});
btn__minus.addEventListener('click',() =>{
    counter--;
    numb.innerHTML=counter;
});
btn__reset.addEventListener('click',() =>{
    counter=0;
    numb.innerHTML=counter;
});


setInterval((e)=>{

    if (counter>0) {
        numb.style.color='limegreen';
    }
    
    if (counter<0) {
        numb.style.color='orangered'
    }
    if (counter==0) {
        numb.style.color='white';
    }

})
