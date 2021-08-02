const petList = document.querySelector('.pet-list');
const searchBtn = document.querySelector('.search-btn');
const searchInput = document.querySelector('.search-input');


// const statement1 = new Statement('ჩუქდება თეთრი კნუტი 1 თვის','ლუკა','69999988978456','თბილისი','არის საყვარელი', null, 0, 'https://images.unsplash.com/photo-1561389881-0dc69054475b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80');

// const statement2 = new Statement('ჩუქდება თეთრი კნუტი 1 თვის','გიორგი','99999999999956','რუსთავი','არის ცელქი და საყვარელი', null, 0, 'https://i.pinimg.com/originals/1d/5c/8e/1d5c8e2a6eb1af906f19ebd68bcecc91.jpg');
// const statement3 = new Statement('იყიდება თეთრი კნუტი 1 თვის','გიორგი','99999999999956','რუსთავი','არის ცელქი და საყვარელი', null, 0, 'https://i.pinimg.com/originals/1d/5c/8e/1d5c8e2a6eb1af906f19ebd68bcecc91.jpg');

// const statementArray = [statement1,statement2,statement3];

const statementsAsString = localStorage.getItem('statements');
const statementsAsArray = JSON.parse(statementsAsString);


const appendStatement = (statement) =>{
    const statementTemplate =
        
        `<div class="statement">
                <p class="statement-title">${statement.title}</p>
                <img class="statement-img" src=${statement.img} alt="">
                <p class="statement-description">${statement.description}</p>
                <p class="author-info">ავტორის სახელი: ${statement.contactPersonName}</p>
                <p class="author-info">საკონტაქტო ნომერი: ${statement.contactPersonNumber}</p>

        </div>`;
    
    petList.innerHTML += statementTemplate;

};


const appendAllStatements = (statements) =>{
    for (const statementP of statements) {
        appendStatement(statementP);
    };
        
    
};



searchBtn.addEventListener('click', () =>{
    petList.innerHTML = '';
    if(searchInput.value === ''){
        appendAllStatements(statementsAsArray);
        return;
    };

    const filterArray = statementsAsArray.filter((statement)=>{
        if(statement.title.includes(searchInput.value)){
            return true;
        }else {
            return false;
        };
    });

    appendAllStatements(filterArray)
});

appendAllStatements(statementsAsArray);