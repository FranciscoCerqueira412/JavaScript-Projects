const button = document.getElementById('button');
const body = document.querySelector('body');
const hex = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
const hex_value=document.getElementById('hex');

hex_value.innerHTML='#ffffff'
body.style.backgroundColor=hex_value.innerHTML;
  button.addEventListener('click',function(){

    let hex_key='#';
    for(let i=0;i<6;i++)
    {
      const index=Math.floor(Math.random()*hex.length);
      hex_key+=hex[index];
    }
    hex_value.innerHTML=hex_key;
    body.style.backgroundColor=hex_key;
  });
    