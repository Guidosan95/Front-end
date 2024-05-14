
const profile = document.querySelector('#img');
const profile1 = document.querySelector('#img1');
const profile2= document.querySelector('#img2');
const profile3= document.querySelector('#img3');

const todas = [profile, profile1, profile2, profile3]




// PRIMER PERFIL
function mostrar() {
    {profile.style.opacity ='1';
    profile.style.transition = '500ms';
    profile.style.color ='white';
    profile.style.textAlign= 'center';}
};

function ocultar() {
    profile.style.opacity = '0';
    profile.style.transition = '500ms';

   
};

// SEGUNDO PERFIL
function mostrar1(){
    {profile1.style.opacity ='1';
    profile1.style.transition = '500ms';
    profile1.style.color ='white';
    profile1.style.textAlign= 'center';}
}
function ocultar1(){
    profile1.style.opacity ='0';
    profile1.style.transition = '500ms';
    
}

// TERCER PERFIL
function mostrar2(){
    {profile2.style.opacity ='1';
    profile2.style.transition = '500ms';
    profile2.style.color ='white';
    profile2.style.textAlign= 'center';}
}
function ocultar2(){
    profile2.style.opacity ='0';
    profile2.style.transition = '500ms';
    
}

// CUARTO PERFIL
function mostrar3(){
    {profile3.style.opacity ='1';
    profile3.style.transition = '500ms';
    profile3.style.color ='white';
    profile3.style.textAlign= 'center';}
}
function ocultar3(){
    profile3.style.opacity ='0';
    profile3.style.transition = '500ms';
    
}