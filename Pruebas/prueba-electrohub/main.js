const hambur = document.querySelector('.container');
const cruz = document.querySelector('.checkmark');
const ul = document.querySelector('.ul');
console.log(ul);

ul.style.display = 'none';
hambur.addEventListener(
    'click',
    function(){
        if(ul.style.display === 'none' || ul.style.display === ''){
            ul.style.display = ' flex'

        }
        else{
            ul.style.display = 'none';
        };
    },
);
cruz.addEventListener(
    'click',
    function(){
        if(ul.style.display === 'flex' || ul.style.display === ''){
            ul.style.display = ' none'
        }
        else{
            ul.style.display = 'flex';
        };
    },
);
