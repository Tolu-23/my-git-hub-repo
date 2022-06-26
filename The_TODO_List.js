const button = document.querySelector('button');
const input = document.querySelector('input');
const list = document.querySelector('ul');
const search = document.querySelector('search');

let theShop = [];
button.addEventListener('click', ()=>{
if (input.value != '') {
    theGood(input.value);
    theShelf(theShop);
    localStorage.setItem('TODO', JSON.stringify(theShop));
}})
function theGood(inputValue){
    let goodCreator = {
        name: inputValue,
        done: false
    }
    theShop.unshift(goodCreator);
    localStorage.setItem('TODO', JSON.stringify(theShop));
}
function theShelf(Array=[]){
    list.innerHTML='';
    Array.forEach((item)=>{
        input.value = '';

        const delBtn = document.createElement('button');
        const markBtn = document.createElement('button');
        const editBtn = document.createElement('button');
        const text = document.createElement('span');
        const theItems = document.createElement('li');

        theItems.appendChild(text);
        text.textContent = item.name;
        theItems.appendChild(delBtn);
        delBtn.textContent = 'DELETE';
        theItems.appendChild(markBtn);
        markBtn.textContent = 'MARKED';
        theItems.appendChild(editBtn);
        editBtn.textContent = 'EDIT';
        if (item.done) {
            setActive('green','blue');
        }
        list.append(theItems);

        const setActive =(textColor = '', markBtnColor = '')=>{
            text.style.color = textColor;
            markBtn.style.color = markBtnColor;
        }
        delBtn.addEventListener('click', ()=>{
            if (window.confirm('do you want to delete')) {
            theShop.splice(i, 1);
            theShelf(theShop);
            localStorage.setItem('TODO', JSON.stringify(theShop));
        }}
        )
        markBtn.addEventListener('click', ()=>{
            if (theShop[i].done == false) {
                theShop[i].done = true;
                setActive('green', 'blue');
            }else{
                theShop[i].done = false;
                setActive();
            }
            localStorage.setItem('TODO', JSON.stringify(theShop));
        })
        editBtn.addEventListener('click', ()=>{
            if (editBtn.style.backgroundColor == '') {
                text.setAttribute('contentEditable', true);
                editBtn.setAttribute('class', 'green');
                editBtn.textContent = 'SAVED';
                editBtn.style.backgroundColor = 'green';                
            } else {
                text.setAttribute('contentEditable', false);
                editBtn.setAttribute('class', 'grey');
                editBtn.textContent = 'EDIT';
                editBtn.style.backgroundColor = ''; 
                theShop[i].name = text.textContent;
                localStorage.setItem('TODO', JSON.stringify(theShop));
            }
            localStorage.setItem('TODO', JSON.stringify(theShop));
        })
    })
    if (Array.length == 0){
        list.innerHTML='item not found';
    }
}

search.addEventListener('keydown', (e)=>{
    if (e.key == 'Enter') {
        if (e.target.value == 'earliest' || e.target.value == 'latest') {
            theShop.reverse();
            theShelf(theShop);
            return
        }
        if (e.target.value === 'done') {
            let markeDone = theShop.filter(function(obj){
                return obj.done
            })
            theShelf(markeDone);
            return
        }
        let Name = theShop.filter(function(obj){
            return obj.name
        })
        theShelf(Name);
    }
    theShelf(theShop);
})

const locStorage = localStorage.getItem('TODO');
if (locStorage) {
    const storageView = JSON.parse(locStorage)
    if (storageView && Array.isArray(storageView) && storageView.length) {
        theShop = storageView 
        theShelf(storageView)
    }
}