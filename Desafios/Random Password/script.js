const button=document.querySelector('.btn');
const input=document.querySelector('.pass');
const inputNum=document.querySelector('.num');
const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!#$%&?';

function GeneratePassword(){
    let password = '';
    
    for (let index = 0; index < inputNum.value; index++) {
        password+=characters.charAt(Math.floor(Math.random()*characters.length));
    }
    return password;
}

button.addEventListener('click',()=>{


    input.value=GeneratePassword();
    if (!(inputNum.value) || inputNum.value>16) {
        
        setTimeout(function(){
            input.classList.add('small-placeholder');
            input.value='Invalid Number Of Characters..'
        })
        
    }
    input.classList.remove('small-placeholder');
    


});