const cabecalhoCategoriasDiv = document.querySelector('.cabecalho-categorias>div:nth-of-type(1) div');
const cabecalhoCategoriasIMG = document.querySelector('.cabecalho-categorias img');
const cabecalhoUserDiv = document.querySelector('.cabecalho-user div');
const cabecalhoUserIMG = document.querySelector('.cabecalho-user img:nth-of-type(2)');

const cabecalhoCategoriasMobileDiv = document.querySelector('.cabecalho-mobile .cabecalho-categorias>div:nth-of-type(1) div');
const cabecalhoCategoriasMobileIMG = document.querySelector('.cabecalho-mobile .cabecalho-categorias img');
const cabecalhoUserMobileDiv = document.querySelector('.cabecalho-mobile .cabecalho-user div');
const cabecalhoUserMobileIMG = document.querySelector('.cabecalho-mobile .cabecalho-user img:nth-of-type(2)');

const botao = document.querySelector('.botao');
const botaoSpan = document.querySelectorAll('.botao span');
const [a, b, c] = botaoSpan;
const cabecalhoOculto = document.querySelector('.cabecalho-mobile');

document.addEventListener('click', e => {

    const el = e.target;
    console.log(el);
    if(el === cabecalhoCategoriasIMG || el === cabecalhoCategoriasMobileIMG){
        cabecalhoCategoriasDiv.classList.toggle('mostrar-categorias');
        cabecalhoCategoriasMobileDiv.classList.toggle('mostrar-categorias');
    } else if(el === cabecalhoUserIMG || el === cabecalhoUserMobileIMG){
        cabecalhoUserDiv.classList.toggle('mostrar-categorias');
        cabecalhoUserMobileDiv.classList.toggle('mostrar-categorias');
    }

    if(el === botao || el === a || el === b || el === c){
        a.classList.toggle('um');
        b.classList.toggle('dois');
        c.classList.toggle('tres');
        cabecalhoOculto.classList.toggle('cabecalho-mobile-desoculto');
    }

});
