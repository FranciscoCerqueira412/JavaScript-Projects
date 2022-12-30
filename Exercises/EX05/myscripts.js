const digit=document.getElementById('digit')
const decreaseBtn=document.getElementById('decrease')
const increaseBtn=document.getElementById('increase')

increaseBtn.addEventListener('click', () => { 
    let increment=digit.textContent
    increment++
    digit.innerHTML=increment
    console.log(digit.innerHTML)
    changeColor ()
})

decreaseBtn.addEventListener('click', () => { 
    let decrement=digit.textContent
    decrement--
    digit.innerHTML=decrement
    console.log(digit.innerHTML)
    changeColor ()
    
})

function changeColor (){
    if (digit.innerHTML<0){
        digit.style.color='red'
    }
    else if (digit.innerHTML>0){
        digit.style.color='green'
    }
    else if (digit.innerHTML==0){
        digit.style.color='#333333'
    }
}

