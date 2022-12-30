const form = document.getElementById('form')


form.addEventListener('submit', function(e){

e.preventDefault();
const message_spot=document.getElementById("message_spot")
const feedback_null=document.getElementById("feedback_null")
const message=document.getElementById("input")

if(message.value==''){
    feedback_null.classList.add('show')
    setTimeout(function(){
        feedback_null.classList.remove('show')
    },2000)
}
else{
    message_spot.textContent=message.value
    message.value=''
}

});