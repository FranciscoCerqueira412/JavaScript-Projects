const generate=document.querySelector('.btn');
const API_LEY='XmMQd0GkckauVU+Unkm9Mw==2cAnydItb9tKhK8y'

function GetRandomJoke(){
    fetch('https://api.api-ninjas.com/v1/dadjokes?',{
    method: 'GET',
    Parameters:{'limit':1},
    headers: {'X-Api-Key':API_LEY},
    
}


).then(response=>response.json()).then(data=>{
    const joke=document.querySelector('.container .joke');
    joke.innerHTML='&#39;'+data[0].joke+'&#39;';
    
})
}
generate.addEventListener('click',()=>{

    GetRandomJoke();


})
window.onload=()=>{
    GetRandomJoke();
}