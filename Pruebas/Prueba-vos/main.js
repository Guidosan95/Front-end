const spanprim = document.querySelector(".prim");
const spansec = document.querySelector(".sec");
const spanter = document.querySelector(".ter");

const resp = document.querySelector(".resp");


const prim = document.querySelector(".uno");
console.log(prim);
const sec = document.querySelector(".dos");
const ter = document.querySelector(".tres");
 
spanprim.addEventListener(
    'click',
    function(){
        resp.style.opacity='1';
        resp.style.transitio = '600ms';
        prim.innerText = 'Vamos a ir a comer una buena parrilla 🍖🍗🥩';
        prim.style.opacity= '1';
        prim.style.width= '64%';
        prim.style.backgroundColor = '#caa9a9';
        prim.style.textAlign = 'center';
        prim.style.justifyContent = 'center';
        sec.style.opacity ='0';
        ter.style.opacity= '0';
    }
);
spansec.addEventListener(
    'click',
    function(){
        resp.style.opacity='1';
        sec.innerText = 'Vamos a salir al cine 🎬🎥';
        sec.style.opacity= '1';
        sec.style.width= '64%';
        sec.style.backgroundColor = '#caa9a9';
        sec.style.textAlign = 'center';
        sec.style.justifyContent = 'center';
        prim.style.opacity ='0';
        ter.style.opacity= '0';
    }
);
spanter.addEventListener(
    'click',
    function(){
        resp.style.opacity='1';
        ter.innerText = 'Nos hacemos una escapada de un dia a algun lado  🚙';
        ter.style.opacity= '1';
        ter.style.width= '64%';
        ter.style.backgroundColor = '#caa9a9';
        ter.style.textAlign = 'center';
        ter.style.justifyContent = 'center';
        sec.style.opacity ='0';
        prim.style.opacity= '0';
    }
);

   
    
