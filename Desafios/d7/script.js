const emojis = ["๐", "๐", "๐คฃ", "๐", "๐", "๐ค", "๐คจ", "๐", "๐", "๐", "๐", "๐", "๐คฅ", "๐ด", "๐ฅบ", "๐ง", "๐ค", "๐คฉ",
"๐", "๐ฅณ", "๐", "๐ฑ", "๐ค", "๐ท", "๐ฅด", "๐ณ", "๐คฏ", "๐คซ", "๐ค", "๐ช", "๐ด", "๐ต", "๐ถ", "๐ฅต", "๐ฅถ", "๐ณ", "๐คช", "๐ต", "๐ฅด",
"๐ต", "๐ ", "๐ก", "๐คฎ", "๐คข", "๐ค", "๐ท", "๐คฌ", "๐คง", "๐", "๐ฅณ"];

const btn=document.querySelector('.emoji');

btn.addEventListener('mouseover',()=>{
    
    let getRandomIndex=Math.floor(Math.random()*emojis.length);
    let emojiRandom=emojis[getRandomIndex];
    btn.innerHTML=emojiRandom;



});

