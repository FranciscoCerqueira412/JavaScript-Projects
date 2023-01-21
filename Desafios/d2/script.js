const API_URL='https://api.thecatapi.com/v1/images/search?api_key'
const API_KEY='=live_HsU2dNggZ6AwCvoWMJfQfGOULgNm0s6gug70X5vf0v8lvfI9T981cJk4iTGNIgsE'
const btn=document.querySelector('.btn');
const gato=document.querySelector('.gato');

function FetchCats(){

    fetch(API_URL+API_KEY).then((response)=>response.json()).then((json)=>{

        let url=json[0];
        let urlL=url.url;
        gato.style.backgroundImage=`url('${urlL}')`;
        console.log(urlL)

    });
}

btn.addEventListener('click', ()=>{
    FetchCats();
});
window.onload=(e)=>{
    FetchCats();
};