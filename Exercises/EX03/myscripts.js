const quotes=['If you want to achieve greatness stop asking for permission.','Things work out best for those who make the best of how things work out.','To live a creative life, we must lose our fear of being wrong.','If you are not willing to risk the usual you will have to settle for the ordinary.','Trust because you are willing to accept the risk, not because it\'s safe or certain.','Take up one idea. Make that one idea your life - think of it, dream of it, live on that idea. Let the brain, muscles, nerves, every part of your body, be full of that idea, and just leave every other idea alone. This is the way to success.','All our dreams can come true if we have the courage to pursue them.','Good things come to people who wait, but better things come to those who go out and get them.','If you do what you always did, you will get what you always got.','Success is walking from failure to failure with no loss of enthusiasm.','Just when the caterpillar thought the world was ending, he turned into a butterfly.'];

const quotes_authors=['Anonymous','John Wooden','Anonymous','Jim Rohn','Anonymous','Swami Vivekananda','Walt Disney','Anonymous','Anonymous','Winston Churchill','Proverb'];

const button=document.getElementById('new-btn');
const quotes_value=document.getElementById('quote');
const quotes_authors_value=document.getElementById('author');

button.addEventListener('click',function(){

  let quotes_key='';
  let quotes_authors_key='';
  for(var i=0;i<quotes.length;i++){
    let random=Math.random();
    const index=Math.floor(random*quotes.length);
    const index2=Math.floor(random*quotes_authors.length);
    quotes_authors_key=quotes_authors[index2];
    quotes_key=quotes[index];
  }  
  quotes_value.innerHTML=quotes_key;
  quotes_authors_value.innerHTML=quotes_authors_key;

});