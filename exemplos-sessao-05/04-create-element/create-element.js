// ===============================
// Hide - Criando um parágrafo dinamicamente
// createElement cria o elemento
// createTextNode cria apenas texto (sem HTML)
// ===============================

// const novoParagrafo = document.createElement('p');
// const textoParagrafo = document.createTextNode(
//     'Este é um novo parágrafo criado com JavaScript.'
// );
// novoParagrafo.appendChild(textoParagrafo);


// ===============================
// Acessando o body
// Elemento pai onde os novos nós serão inseridos 
// Sem boddy nada é exibido na página
// ===============================

// const body = document.querySelector('body');
// body.appendChild(novoParagrafo);


// ===============================
// Hide - Criando um título dinamicamente
// Mesmo processo: criar → adicionar texto → inserir no DOM
// ===============================

// const novoH1 = document.createElement('h1');
// const textoH1 = document.createTextNode('Título Criado com JavaScript');
// novoH1.appendChild(textoH1);
// body.appendChild(novoH1);


// ===============================
// Hide - Criando elementos aninhados
// Exemplo: div → span → texto
// ===============================

// const container = document.createElement('div');
// console.log(container);

// const span = document.createElement('span');
// const textSpan = 'Texto do span via variável';

// span.appendChild(document.createTextNode(textSpan));
// console.log(span);

// container.appendChild(span);
// body.appendChild(container);


// ===============================
// Hide - Segurança do createElement
// Diferente do innerHTML, não interpreta HTML
// Não permite injeção de código (XSS)
// ===============================


