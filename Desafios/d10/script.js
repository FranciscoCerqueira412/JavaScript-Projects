const caixas = document.querySelectorAll('.caixa');
const button =document.querySelector('.btn');

var toggleStart=(function togglesOnce(){
    caixas.forEach((caixa)=>{
        const colorR=Math.random()*255
        const colorG=Math.random()*255
        const colorB=Math.random()*255
        caixa.style.backgroundColor =`rgb(${colorR},${colorG},${colorB})`
        console.log(caixa.style.backgroundColor =`rgb(${colorR},${colorG},${colorB}`);

        function RGBToHex() {
            var r = colorR
            var g = colorG
            var b = colorB
            r = parseInt(r).toString(16);
            g = parseInt(g).toString(16);
            b = parseInt(b).toString(16);
        
            if (r.length == 1)
            r = "0" + r;
            if (g.length == 1)
            g = "0" + g;
            if (b.length == 1)
            b = "0" + b;
        
            return "#" + r + g + b;
        }
        caixa.innerHTML=RGBToHex();
        
    })
    return togglesOnce;
})
toggleStart();

button.addEventListener('click',()=>{
    toggleStart();
})
