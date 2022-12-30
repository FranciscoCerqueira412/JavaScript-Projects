const button=document.getElementById('new-btn');
const quotes_value=document.getElementById('quote');
const quotes_authors_value=document.getElementById('author');



button.addEventListener('click',function(){
  const data=fetch('https://api.quotable.io/random').then(res=>res.json()).then(result=>{console.log(result);
  quotes_value.innerHTML=result.content;
  quotes_authors_value.innerHTML=result.author;
});
  


});