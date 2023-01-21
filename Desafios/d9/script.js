const container=document.querySelector(".container");
const image=document.querySelector(".image");
const nome=document.querySelector(".nome");
const exp=document.querySelector(".exp");

fetch(`https://pokeapi.co/api/v2/pokemon?offset=0&limit=1279`).then(response=>response.json()).then(json=>{
    const sortedArray=[...json.results];
    sortedArray.sort((a,b)=>{
        a.name.localeCompare(b.name);
    });

    sortedArray.forEach(item=>{
        fetch(item.url).then(response=>response.json()).then(json=>{

            // console.log(json.name)
            
            let outerDiv = document.createElement("div");
            outerDiv.setAttribute('class','item');
            outerDiv.setAttribute('alt','pokemon');

            let img = document.createElement("img");
            img.setAttribute('src','images/favicon.ico');
            img.setAttribute('alt',json.name);
            outerDiv.appendChild(img);
            
            let innerDiv = document.createElement("div");
            innerDiv.setAttribute('class','textdata');

            let para = document.createElement("p");
            para.setAttribute('class','nome');
            para.innerHTML = "Nome";
            innerDiv.appendChild(para);
            
            let span = document.createElement("span");
            span.setAttribute('class','exp');
            span.innerHTML = "This is a span.";
            innerDiv.appendChild(span);
            
            outerDiv.appendChild(innerDiv);
            
            container.appendChild(outerDiv);

            img.setAttribute("src",json.sprites.front_default)
            para.innerHTML=json.name
            span.innerHTML="EXP: "+json.base_experience;

            if (json.types[0].type.name=='normal') {
                outerDiv.style.backgroundColor="#A8A878"
            }
            if (json.types[0].type.name=='fire') {
                outerDiv.style.backgroundColor="#F08030"
            }
            if (json.types[0].type.name=='fighting') {
                outerDiv.style.backgroundColor="#C03028"
            }
            if (json.types[0].type.name=='water') {
                outerDiv.style.backgroundColor="#6890F0"
            }
            if (json.types[0].type.name=='flying') {
                outerDiv.style.backgroundColor="#A890F0"
            }
            if (json.types[0].type.name=='grass') {
                outerDiv.style.backgroundColor="#78C850"
            }
            if (json.types[0].type.name=='poison') {
                outerDiv.style.backgroundColor="#A040A0"
            }
            if (json.types[0].type.name=='electric') {
                outerDiv.style.backgroundColor="#F8D030"
            }
            if (json.types[0].type.name=='ground') {
                outerDiv.style.backgroundColor="#E0C068"
            }
            if (json.types[0].type.name=='psychic') {
                outerDiv.style.backgroundColor="#F85888"
            }
            if (json.types[0].type.name=='rock') {
                outerDiv.style.backgroundColor="#B8A038"
            }
            if (json.types[0].type.name=='ice') {
                outerDiv.style.backgroundColor="#98D8D8"
            }
            if (json.types[0].type.name=='bug') {
                outerDiv.style.backgroundColor="#A8B820"
            }
            if (json.types[0].type.name=='dragon') {
                outerDiv.style.backgroundColor="#7038F8"
            }
            if (json.types[0].type.name=='ghost') {
                outerDiv.style.backgroundColor="#705898"
            }
            if (json.types[0].type.name=='dark') {
                outerDiv.style.backgroundColor="#705848"
            }
            if (json.types[0].type.name=='steel') {
                outerDiv.style.backgroundColor="#B8B8D0"
            }
            if (json.types[0].type.name=='fairy') {
                outerDiv.style.backgroundColor="#EE99AC"
            }
            if (json.sprites.front_default===null ||span.innerHTML=='EXP: '+null) {
                outerDiv.style.display="none";
            }


        })

        

    })
        
})
