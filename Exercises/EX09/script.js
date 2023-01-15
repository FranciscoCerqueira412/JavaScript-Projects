const images=document.getElementsByClassName("image");

let index=0;
    let last={x:0,y:0};
    let count=0;

const showImages= (image,x,y)=>{
    image.style.left=x+'px';
    image.style.top=y+'px';

    image.dataset.status="active";

    last={x,y}

}

const distanceFromLast=(x,y)=>{
    return Math.hypot(x-last.x , y-last.y);
}

window.onmousemove=e => {
    
    if(distanceFromLast(e.clientX,e.clientY)>100){
    const firstImage=images[index % images.length],
            tail=images[(index-5)%images.length];
        showImages(firstImage,e.clientX,e.clientY);
    if(tail) tail.dataset.status="inactive";
    index++;
    count++;
    }


}


