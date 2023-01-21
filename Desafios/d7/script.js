const emojis = ["😆", "😅", "🤣", "😂", "😀", "🤑", "🤨", "🙂", "😊", "😗", "😛", "😏", "🤥", "😴", "🥺", "😧", "🤗", "🤩",
"😎", "🥳", "😍", "😱", "🤓", "😷", "🥴", "😳", "🤯", "🤫", "🤑", "😪", "😴", "😵", "😶", "🥵", "🥶", "😳", "🤪", "😵", "🥴",
"😵", "😠", "😡", "🤮", "🤢", "🤒", "😷", "🤬", "🤧", "😇", "🥳"];

const btn=document.querySelector('.emoji');

btn.addEventListener('mouseover',()=>{
    
    let getRandomIndex=Math.floor(Math.random()*emojis.length);
    let emojiRandom=emojis[getRandomIndex];
    btn.innerHTML=emojiRandom;



});

