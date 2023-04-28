const addBtn = document.querySelector('.button__add');
const tableEl = document.querySelector('.table');
const formNameEl = document.querySelector('.form__input-name');
const formEmailEl = document.querySelector('.form__input-email');
const formAgeEl = document.querySelector('.form__input-age');
const formEl = document.querySelector('.form');

formEl.addEventListener('submit', evt => {
  evt.preventDefault();
  let name = formNameEl.value;
  let email = formEmailEl.value;
  let age = formAgeEl.value;

  if (name === '' || email === '' || age === '') {
    alert('Please fill in all fields');
  } else {
    const el = addClient(name, email, age);
    tableEl.appendChild(el);

    formNameEl.value = '';
    formEmailEl.value = '';
    formAgeEl.value = '';
  }
});

function addClient(name, email, age) {
  const rowEl = document.createElement('tr');

  rowEl.innerHTML = `
    <td>Id</td>
    <td>
        <p id="name">${name}</p>
        <input id="input-name" type="text" class="hidden" value=${name} />
    </td>
    <td>
        <p id="email">${email}</p>
        <input id="input-email" type="email" class="hidden" value=${email} />

    </td>
    <td>
        <p id="age">${age}</p>
        <input id="input-age" type="number" class="hidden" value=${age} />
    </td>
    <td>
        <button type="button" class="button__edit">Edit</button>
        <button type="button" class="button__delete">Delete</button>
    </td>
  `;

  const editBtn = rowEl.querySelector('.button__edit');
  const deleteBtn = rowEl.querySelector('.button__delete');
  const nameEl = rowEl.querySelector('#name');
  const emailEl = rowEl.querySelector('#email');
  const ageEl = rowEl.querySelector('#age');
  const inputNameEl = rowEl.querySelector('#input-name');
  const inputEmailEl = rowEl.querySelector('#input-email');
  const inputAgeEl = rowEl.querySelector('#input-age');

  editBtn.addEventListener('click', () => {
    nameEl.classList.toggle('hidden');
    emailEl.classList.toggle('hidden');
    ageEl.classList.toggle('hidden');
    inputNameEl.classList.toggle('hidden');
    inputEmailEl.classList.toggle('hidden');
    inputAgeEl.classList.toggle('hidden');
  });

  deleteBtn.addEventListener('click', () => {
    rowEl.remove();
  });

  inputNameEl.addEventListener('input', evt => {
    nameEl.innerText = evt.target.value;
  });

  inputEmailEl.addEventListener('input', evt => {
    emailEl.innerText = evt.target.value;
  });

  inputAgeEl.addEventListener('input', evt => {
    ageEl.innerText = evt.target.value;
  });

  return rowEl;
}
