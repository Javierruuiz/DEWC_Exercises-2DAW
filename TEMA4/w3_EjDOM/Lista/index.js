const input = document.getElementById('grocery-input');
const submitBtn = document.getElementById('submit-btn');
const groceryList = document.getElementById('grocery-list');
const clearBtn = document.getElementById('clear-btn');

let editElement = null;

// Agregar elemento a la lista
submitBtn.addEventListener('click', () => {
  const value = input.value.trim();

  if (value && !editElement) {
    const li = document.createElement('li');
    li.classList.add('grocery-item');

    li.innerHTML = `
      <span>${value}</span>
      <button class="edit-btn">✏️</button>
      <button class="delete-btn">🗑️</button>
    `;

    groceryList.appendChild(li);
    input.value = '';

    
    li.querySelector('.edit-btn').addEventListener('click', () => {
      input.value = value;
      editElement = li;
    });

    
    li.querySelector('.delete-btn').addEventListener('click', () => {
      groceryList.removeChild(li);
      if (editElement === li) {
        editElement = null;
        input.value = '';
      }
    });
  } else if (editElement) {
    editElement.querySelector('span').textContent = value;
    editElement = null;
    input.value = '';
  }
});

clearBtn.addEventListener('click', () => {
  groceryList.innerHTML = '';
  editElement = null;
  input.value = '';
});
