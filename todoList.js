const lista = document.getElementById("lista");
const fab = document.getElementById("fab");

// Modal elements
const modal = document.getElementById("modal");
const closeModalBtn = document.getElementById("closeModal");
const modalForm = document.getElementById("modalForm");
const modalInput = document.getElementById("modalInput");
const modalTitle = document.getElementById("modalTitle");
const modalSubmit = document.getElementById("modalSubmit");

const STORAGE_KEY = "todo_app_simple_v3";
let tasks = loadTasks();

// guarda o id da tarefa em edição (null = modo adicionar)
let editingId = null;

function loadTasks() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function saveTasks() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
}

function render() {
  lista.innerHTML = "";

  tasks.forEach((t) => {
    const li = document.createElement("li");
    li.className = "tarefa" + (t.done ? " concluida" : "");
    li.dataset.id = t.id;

    li.innerHTML = `
      <button class="check" type="button" aria-label="Marcar como concluída"></button>
      <span class="texto"></span>
      <button class="edit" type="button" aria-label="Editar tarefa">✎</button>
      <button class="delete" type="button" aria-label="Eliminar tarefa">✕</button>
    `;

    li.querySelector(".texto").textContent = t.text;
    lista.appendChild(li);
  });
}

// ---------- Modal controls ----------
function openModalAdd() {
  editingId = null;
  modalTitle.textContent = "Nova tarefa";
  modalSubmit.textContent = "Adicionar";
  modalInput.value = "";
  openModal();
}

function openModalEdit(task) {
  editingId = task.id;
  modalTitle.textContent = "Editar tarefa";
  modalSubmit.textContent = "Guardar";
  modalInput.value = task.text;
  openModal();
}

function openModal() {
  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
  setTimeout(() => {
    modalInput.focus();
    modalInput.select();
  }, 0);
}

function closeModal() {
  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden", "true");
  modalForm.reset();
  editingId = null;
  fab.focus();
}

// ---------- Task actions ----------
function addTask(text) {
  const clean = text.trim();
  if (!clean) return;

  tasks.push({
    id: crypto.randomUUID(),
    text: clean,
    done: false,
  });

  saveTasks();
  render();
}

function updateTask(id, newText) {
  const clean = newText.trim();
  if (!clean) return; // não guardar vazio

  const t = tasks.find((x) => x.id === id);
  if (!t) return;

  t.text = clean;
  saveTasks();
  render();
}

function toggleTask(id) {
  const t = tasks.find((x) => x.id === id);
  if (!t) return;
  t.done = !t.done;
  saveTasks();
  render();
}

function deleteTask(id) {
  tasks = tasks.filter((x) => x.id !== id);
  saveTasks();
  render();
}

// ---------- Events ----------
fab.addEventListener("click", openModalAdd);

closeModalBtn.addEventListener("click", closeModal);

modal.addEventListener("click", (e) => {
  if (e.target?.dataset?.close === "true") closeModal();
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && modal.classList.contains("is-open")) closeModal();
});

modalForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const value = modalInput.value;

  if (editingId) updateTask(editingId, value);
  else addTask(value);

  closeModal();
});

lista.addEventListener("click", (e) => {
  const li = e.target.closest(".tarefa");
  if (!li) return;

  const id = li.dataset.id;

  if (e.target.classList.contains("check")) {
    toggleTask(id);
    return;
  }

  if (e.target.classList.contains("delete")) {
    deleteTask(id);
    return;
  }

  if (e.target.classList.contains("edit")) {
    const task = tasks.find((x) => x.id === id);
    if (task) openModalEdit(task);
    return;
  }
});

// Init
render();

