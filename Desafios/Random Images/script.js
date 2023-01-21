const imags=document.querySelectorAll('img');
const YOUR_ACCESS_KEY='u78g2oBmcAo3zXgsfqXo_5CrHFyHD8KCguHWWY-vBlk'


let index=0;
imags.forEach((imag)=>{
    fetch(`https://api.unsplash.com/photos?client_id=${YOUR_ACCESS_KEY}&page=${random()}`).then(response => response.json()).then(json=>{
    imag.setAttribute('src',json[index].urls.full)
    let imgW=(json[index].width);
    let imgH=(json[index].height);
    imag.style.width=`${imgW/15}px`;
    imag.style.height=`${imgH/15}px`;
    
    index++;

    console.log(json);
})

})
function random(){
    return Math.floor((Math.random()*600));
}