//textos y traducciones
const espanol = 'En un lugar de la Mancha, de cuyo nombre no quiero acordarme, no ha mucho tiempo que vivía un hidalgo de los de lanza en astillero, adarga antigua, rocín flaco y galgo corredor.';
const frances = 'Dans un endroit de La Mancha, dont je ne veux pas me souvenir du nom, il n\'y a pas si longtemps vivait un noble avec une lance dans un chantier naval, un bouclier à l\'ancienne, un rocín maigre et un lévrier en fuite.';
const ingles = 'In a place of La Mancha, whose name I don\'t want to remember, not long ago there lived a nobleman with a lance in a shipyard, an old-fashioned buckler, a skinny rocín and a running greyhound.';

//para que aparezca dentro del parrafo, debemos colocar la siguiente formula
// frase porque es el id que seleccionamos en el index.html
frase.innerText= espanol;
frase.innerText= frances;
frase.innerText= ingles;

const paisesAmericaSur = ["Argentina", "Bolivia", "Brasil", "Chile", "Colombia", "Ecuador"," Guyana", "Paraguay", "Perú", "Surinam", "Uruguay", "Venezuela"];
        const paisesAmericaDelNorte = ["Canada", "Estados Unidos", "Mexico", "Alaska"];
        const paisesAmerica= paisesAmericaSur.concat(paisesAmericaDelNorte);
        alert(paisesAmerica);
        console.log(paisesAmerica);

