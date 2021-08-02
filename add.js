const addBtn = document.querySelector('#addBtn');
const titleInput = document.querySelector('#title');
const imageInput = document.querySelector('#image');
const description = document.querySelector('#description');
const contactPersonNameInput = document.querySelector('#contactPersonName');
const contactPersonNumberInput = document.querySelector('#contactPersonNumber');


const statements = JSON.parse(localStorage.getItem('statements'));


addBtn.addEventListener('click', (event) =>{
    const newStatement = new Statement(titleInput.value,contactPersonNameInput.value, contactPersonNumberInput.value, null, description.value, null, null, imageInput.value);
    statements.push(newStatement);
    localStorage.setItem('statements', JSON.stringify(statements));
    window.location.href = 'index.html';
});

