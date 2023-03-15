const mario = document.querySelector('.mario'); 

const pipe = document.querySelector('.pipe');

const clouds = document.querySelector('.clouds');
const nuvens = document.querySelector('.nuvens');
const nuvens2 = document.querySelector('.nuvens2');


const birdSecond = document.querySelector('.bird-second');
const birdTree = document.querySelector('.bird-tree');
const birdQuatro = document.querySelector('.bird-quatro');
const birdCinco = document.querySelector('.bird-cinco');
const birdSeis = document.querySelector('.bird-seis');

const jump  = () => {
    mario.classList.add('jump');

    setTimeout(() => {

        mario.classList.remove('jump');

    }, 500);
}


    //chama o validar pra ver se bateu ou não a cada 10 milisegundos
 const loop = setInterval (() => {

    validador();

}, 10);

    //validar se bateu no pipe
    function validador () {
        
        
        const pipePosition = pipe.offsetLeft;

        const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

        const cloudsPosition = clouds.offsetLeft;
        const nuvensPosition = nuvens.offsetLeft;
        const nuvens2Position = nuvens2.offsetLeft;

        const birdSecondPosition = birdSecond.offsetLeft;
        const birdTreePosition = birdTree.offsetLeft;
        const birdQuatroPosition = birdQuatro.offsetLeft;
        const birdCincoPosition = birdCinco.offsetLeft;
        const birdSeisPosition = birdSeis.offsetLeft;
    
        if(pipePosition <= 110 && pipePosition > 0 && marioPosition < 80) {
    
            pipe.style.animation = 'none';
            pipe.style.left = `${pipePosition}px`
            
    
            mario.style.animation = 'none';
            mario.style.bottom = `${marioPosition}px`
    
            mario.src = "game-over.png";
            mario.style.width = '75px';
            mario.style.marginLeft = '35px'

    
            clouds.style.animation = 'none';
            clouds.style.left = `${cloudsPosition}px`

            nuvens.style.animation = 'none';
            nuvens.style.left = `${nuvensPosition}px`

            nuvens2.style.animation = 'none';
            nuvens2.style.left = `${nuvens2Position}px`


            birdSecond.style.animation = 'none';
            birdSecond.style.left = `${birdSecondPosition}px`

            birdTree.style.animation = 'none';
            birdTree.style.left = `${birdTreePosition}px`

            birdQuatro.style.animation = 'none';
            birdQuatro.style.left = `${birdQuatroPosition}px`

            birdCinco.style.animation = 'none';
            birdCinco.style.left = `${birdCincoPosition}px`

            birdSeis.style.animation = 'none';
            birdSeis.style.left = `${birdSeisPosition}px`
    
            clearInterval(loop);
    
            //pipePosition = setTimeout(100);

            return(false);
        }
    return(true);

    }

    //aumentar a velocidade do pipe 
    /*const velocidade = setInterval (() => {

        if(validador() == false){
            clearInterval(velocidade)
            return
        }
        if(validacaoTempo >= 250){

            pipe.style.animationDuration = validacaoTempo + 'ms';
            validacaoTempo -= 250

            console.log(validacaoTempo);

            
        }else(clearInterval(velocidade))

    }, 2000);

    var validacaoTempo = 5000;*/
    
    

document.addEventListener('keydown', jump);