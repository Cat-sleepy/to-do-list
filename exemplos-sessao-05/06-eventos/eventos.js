// ===============================
// Hide - Funções de interação
// Alteram texto e estilo com base em eventos
// ===============================


// Hide - Evento de click
// Muda o texto e a cor de fundo ao clicar
function clicar(id) {
    const elemento = document.querySelector(`#${id}`);
    elemento.innerText = 'Clicado!';
    elemento.style.backgroundColor = 'rgb(100, 0, 0)';
}


// Hide - Evento mouseenter
// Dispara quando o mouse entra no elemento
function entrar(id) {
    const elemento = document.querySelector(`#${id}`);
    elemento.innerText = 'Entrou com o mouse!';
}


// Hide - Evento mouseleave
// Dispara quando o mouse sai do elemento
// Restaura texto e estilo original
function sair(id) {
    const elemento = document.querySelector(`#${id}`);
    elemento.innerText = 'Interaja...';
    elemento.style.backgroundColor = 'rgb(10, 148, 10)';
}


// ===============================
// Hide - Event Listeners
// Forma recomendada de trabalhar com eventos
// Evita poluir o HTML com onclick, onmouseover etc.
// ===============================

const area2 = document.querySelector('#area2');

area2.addEventListener('click', () => clicar('area2'));
area2.addEventListener('mouseenter', () => entrar('area2'));
area2.addEventListener('mouseleave', () => sair('area2'));


// ===============================
// Hide - Função de soma
// Captura valores dos inputs
// Converte para Number e exibe o resultado
// ===============================

function somar() {
    const tn1 = document.querySelector('#txtn1').value;
    const tn2 = document.querySelector('#txtn2').value;
    const resultado = document.querySelector('.resultado');

    resultado.innerHTML = `Resultado: ${Number(tn1) + Number(tn2)}`;
}
