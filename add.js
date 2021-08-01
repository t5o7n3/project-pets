const addBtn = document.querySelector('#addBtn');
const titleInput = document.querySelector('#title');
const imageInput = document.querySelector('#image');
const description = document.querySelector('#description');
const contactPersonNameInput = document.querySelector('#contactPersonName');
const contactPersonNumberInput = document.querySelector('#contactPersonNumber');

addBtn.addEventListener('click', (event) =>{
    const statement = new Statement(titleInput.value,contactPersonNameInput.value, contactPersonNumberInput.value,null, description.value, null, null, imageInput.value);
    
    console.log(statement);
    
});

