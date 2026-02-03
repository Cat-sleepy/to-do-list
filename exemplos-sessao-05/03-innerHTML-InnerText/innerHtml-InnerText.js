// ===============================
// Hide - innerHTML
// Adiciona HTML + Texto dentro do elemento
// Substitui todo o conteúdo interno
// ===============================

// const container = document.querySelector('#container');
// container.innerHTML = `
//     <h1>Olá, Mundo!</h1>
//     <p>Este conteúdo foi adicionado via innerHTML.</p>
// `;


// ===============================
// Hide - innerText
// Adiciona APENAS texto
// Tags HTML são interpretadas como texto puro
// ===============================

// const texto = document.querySelector('#texto');
// texto.innerText = '<h1>Olá, Mundo!</h1><p>Este conteúdo foi adicionado via innerText.</p>';


// ===============================
// Hide - Criando listas dinamicamente com innerHTML
// Podemos gerar HTML a partir de Arrays
// ===============================

// const frutas = ['Maçã', 'Banana', 'Laranja'];
// const lista = document.querySelector('.container-list');

// Transforma um Array em uma lista HTML de uma só vez
// map → percorre o array
// join → remove as vírgulas
// lista.innerHTML = `
//     <ul>
//         ${frutas.map(fruta => `<li>${fruta}</li>`).join('')}
//     </ul>
// `;


// ===============================
// Hide - Atenção com innerHTML
// innerHTML pode gerar riscos de segurança
// Permite injeção de código malicioso (XSS)
// ===============================

// ❌ Nunca use innerHTML com dados vindos do usuário
// ✔️ Prefira createElement quando possível
