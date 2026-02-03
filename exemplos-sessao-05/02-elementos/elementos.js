// 01 - Introdução ao DOM
// O DOM permite acessar e manipular elementos HTML usando JavaScript


// ===============================
// 02 - getElementsByTagName
// Seleciona elementos pela TAG
// Retorna uma HTMLCollection (precisa de índice)
// ===============================

// const primeiroParagrafo = document.getElementsByTagName("p")[0];
// primeiroParagrafo.style.color = "yellow";
// primeiroParagrafo.style.fontWeight = "bold";


// ===============================
// 03 - getElementById
// Seleciona um elemento único pelo ID
// ===============================

// const subTitulo = document.getElementById("sub-titulo");
// subTitulo.style.backgroundColor = "green";
// subTitulo.style.padding = "8px";


// ===============================
// 04 - getElementsByName
// Seleciona elementos pelo atributo name
// Retorna uma NodeList
// ===============================

// const paragrafoPorNome = document.getElementsByName("segundo-paragrafo")[0];
// paragrafoPorNome.style.backgroundColor = "purple";
// paragrafoPorNome.style.padding = "8px";


// ===============================
// 05 - getElementsByClassName (elemento único)
// Seleciona elementos pela classe
// Retorna uma HTMLCollection
// ===============================

// const tituloPrincipal = document.getElementsByClassName("primeira-classe")[0];
// tituloPrincipal.style.backgroundColor = "red";
// tituloPrincipal.style.fontWeight = "bold";
// tituloPrincipal.style.fontSize = "42px";


// ===============================
// 06 - getElementsByClassName (coleção)
// HTMLCollection não permite forEach
// Usamos for tradicional
// ===============================

// const itensClassName = document.getElementsByClassName("item-className");

// for (let i = 0; i < itensClassName.length; i++) {
//     itensClassName[i].style.padding = "8px";
//     itensClassName[i].style.borderBottom = "1px solid white";
//     console.log(`Item ClassName ${i}:`, itensClassName[i]);
// }


// ===============================
// 07 - querySelector
// Usa seletores CSS
// Retorna apenas o PRIMEIRO elemento encontrado
// ===============================

// const tituloLista = document.querySelector(".titulo-lista-1");
// tituloLista.style.backgroundColor = "green";


// ===============================
// 08 - querySelectorAll
// Retorna uma NodeList
// Permite uso direto do forEach
// ===============================

// const itensQuery = document.querySelectorAll("#lista .item");

// itensQuery.forEach((item, index) => {
//     item.style.color = "blue";
//     item.style.fontSize = "24px";
//     item.style.marginBottom = "16px";
//     console.log(`Item QuerySelectorAll ${index}:`, item);
// });


// ===============================
// 09 - querySelector por TAG
// Muito usado quando existe apenas uma tag do tipo
// ===============================

// const h3 = document.querySelector("h3");
// h3.style.backgroundColor = "orange";
// h3.style.padding = "16px";
