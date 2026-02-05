const formulario = document.querySelector('form');
formulario.addEventListener('submit', function(event){
    event.preventDefault();
})

let listaTarefas = document.querySelector('.lista-tarefas');