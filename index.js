const petList = document.querySelector('.pet-list');
const searchBtn = document.querySelector('.search-btn');
const searchInput = document.querySelector('.search-input');


const statementsAsString = localStorage.getItem('statements');
const statementsAsArray = JSON.parse(statementsAsString);

let statements = [];

const getStatements = ()=>{
    $.ajax({
        method: "GET",
        url: "http://localhost:3000/statements",
        
    })
    .done(function(data) {
        statements = data;
        appendAllStatements(data);
    });
};

getStatements();

const appendStatement = (statement) =>{
    const statementTemplate =
        
        `<div class="statement">
                <p class="statement-title">${statement.title}</p>
                <img class="statement-img" src=${statement.img} alt="">
                <p class="statement-description">${statement.description}</p>
                <p class="author-info">ქალაქი: ${statement.address}</p>
                <p class="author-info">შინაური ცხოველი: ${statement.pet}</p>
                <p class="author-info">ფასი(₾): ${statement.price}</p>
                <p class="author-info">ავტორის სახელი: ${statement.contactPersonName}</p>
                <p class="author-info">საკონტაქტო ნომერი: ${statement.contactPersonNumber}</p>
                

        </div>`;
    
    petList.innerHTML += statementTemplate;

};


const appendAllStatements = (statements) =>{
    petList.innerHTML= '';
    for (const statementP of statements) {
        appendStatement(statementP);
    };
        
    
};

searchBtn.addEventListener('click', () =>{
    petList.innerHTML = '';
    if(searchInput.value === ''){
        appendAllStatements(statements);
        return;
    };

    const filterArray = statements.filter((statement)=>{
       return statement.title.includes(searchInput.value);
    });

    appendAllStatements(filterArray)
});


const deleteStatement = (id
    ) =>{
        $.ajax({
            method:"DELETE",
            url: `http://localhost:3000/statements/${id}`,
        })
        .done(function(data) {
            statements = data;
            alert('statement has been deleted');
            getStatements();
        });
};