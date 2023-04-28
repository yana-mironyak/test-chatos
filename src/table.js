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

  const sortAscIdEl = document.querySelector('#btn-up-id');
  const sortAscAgelEl = document.querySelector('#btn-up-age');
  const sortAscNameEl = document.querySelector('#btn-up-name');
  const sortAscEmailEl = document.querySelector('#btn-up-email');

  sortAscIdEl.addEventListener('click', () => {
    sortRows = Array.from(tableEl.rows)
      .slice(1)
      .sort((rowA, rowB) => {
        return rowA.cells[0].innerHTML - rowB.cells[0].innerHTML;
      });

    tableEl.tBodies[0].append(...sortRows);
  });

  sortAscNameEl.addEventListener('click', () => {
    sortRows = Array.from(tableEl.rows)
      .slice(1)
      .sort((rowA, rowB) => {
        if (rowA.cells[1].innerText.toLowerCase() < rowB.cells[1].innerText.toLowerCase()) {
          return -1;
        }
        if (rowA.cells[1].innerText.toLowerCase() > rowB.cells[1].innerText.toLowerCase()) {
          return 1;
        }
      });

    tableEl.tBodies[0].append(...sortRows);
  });

  sortAscEmailEl.addEventListener('click', () => {
    sortRows = Array.from(tableEl.rows)
      .slice(1)
      .sort((rowA, rowB) => {
        if (rowA.cells[2].innerText.toLowerCase() < rowB.cells[2].innerText.toLowerCase()) {
          return -1;
        }
        if (rowA.cells[2].innerText.toLowerCase() > rowB.cells[2].innerText.toLowerCase()) {
          return 1;
        }
      });

    tableEl.tBodies[0].append(...sortRows);
  });

  sortAscAgelEl.addEventListener('click', () => {
    sortRows = Array.from(tableEl.rows)
      .slice(1)
      .sort((rowA, rowB) => {
        return rowA.cells[3].innerText - rowB.cells[3].innerText;
      });

    tableEl.tBodies[0].append(...sortRows);
  });

  const sortDescIdEl = document.querySelector('#btn-down-id');
  const sortDescAgelEl = document.querySelector('#btn-down-age');
  const sortDescNameEl = document.querySelector('#btn-down-name');
  const sortDescEmailEl = document.querySelector('#btn-down-email');

  sortDescIdEl.addEventListener('click', () => {
    sortRows = Array.from(tableEl.rows)
      .slice(1)
      .sort((rowA, rowB) => {
        return rowB.cells[0].innerHTML - rowA.cells[0].innerHTML;
      });

    tableEl.tBodies[0].append(...sortRows);
  });

  sortDescNameEl.addEventListener('click', () => {
    sortRows = Array.from(tableEl.rows)
      .slice(1)
      .sort((rowA, rowB) => {
        if (rowA.cells[1].innerText.toLowerCase() > rowB.cells[1].innerText.toLowerCase()) {
          return -1;
        }
        if (rowA.cells[1].innerText.toLowerCase() < rowB.cells[1].innerText.toLowerCase()) {
          return 1;
        }
      });

    tableEl.tBodies[0].append(...sortRows);
  });

  sortDescEmailEl.addEventListener('click', () => {
    sortRows = Array.from(tableEl.rows)
      .slice(1)
      .sort((rowA, rowB) => {
        if (rowA.cells[2].innerText.toLowerCase() > rowB.cells[2].innerText.toLowerCase()) {
          return -1;
        }
        if (rowA.cells[2].innerText.toLowerCase() < rowB.cells[2].innerText.toLowerCase()) {
          return 1;
        }
      });

    tableEl.tBodies[0].append(...sortRows);
  });

  sortDescAgelEl.addEventListener('click', () => {
    sortRows = Array.from(tableEl.rows)
      .slice(1)
      .sort((rowA, rowB) => {
        return rowB.cells[3].innerText - rowA.cells[3].innerText;
      });

    tableEl.tBodies[0].append(...sortRows);
  });
});

function addClient(name, email, age) {
  const rowEl = document.createElement('tr');
  const id = Math.ceil(Math.random() * 100);

  rowEl.innerHTML = `
    <td>${id}</td>
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
        <button type="button" class="button button__edit">Edit</button>
        <button type="button" class="button button__delete">Delete</button>
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
