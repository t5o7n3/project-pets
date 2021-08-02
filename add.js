const addBtn = document.querySelector('#addBtn');
const titleInput = document.querySelector('#title');
const imageInput = document.querySelector('#image');
const description = document.querySelector('#description');
const addressInput = document.querySelector('#address');
const petInput = document.querySelector('#pet');
const contactPersonNameInput = document.querySelector('#contactPersonName');
const contactPersonNumberInput = document.querySelector('#contactPersonNumber');
const priceInput = document.querySelector('#price');



addBtn.addEventListener('click', () =>{
    
    const titleInputVal = titleInput.value;
    const imageInputVal = imageInput.value;
    const descriptionVal = description.value;
    const addressInputVal = addressInput.value;
    const contactPersonNameInputVal = contactPersonNameInput.value;
    const contactPersonNumberInputVal = contactPersonNumberInput.value;
    const priceInputVal = priceInput.value;

    if (titleInputVal === '' || imageInputVal === '' || descriptionVal === '' || contactPersonNameInputVal === '' || contactPersonNumberInputVal === ''|| addressInputVal === '' || priceInputVal === '') {
        alert('Do not left empty field')
        return false;
    }else {
        const newStatement = new Statement(titleInput.value,contactPersonNameInput.value, contactPersonNumberInput.value, null, description.value, null, null, imageInput.value);
        addStatement(newStatement);
    }


});

const addStatement = (statementP) =>{
    $.ajax({
        method:"POST",
        url: "http://localhost:3000/statements",
        data: statementP
    })
    .done(function(data) {
        console.log(data);
    });
}


