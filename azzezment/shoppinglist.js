const button = document.querySelector('button')
const input = document.querySelector('input')
const list = document.querySelector('ul')
const search = document.querySelector('#search')

button.addEventListener('click', ()=>{
    storeItem(input.value); 
    renderViews(itemStore); 
    }
    )
let itemStore = [];

function idGenerator() {
    return 'number'+ Math.floor(Math.random() * (1000+1)) 
}

function storeItem(itemValue,) {
    let storeObject= { 
        name: itemValue, 
        id: idGenerator(),
        done: false
    }
    itemStore.unshift(storeObject);
    localStorage.setItem('myObj', JSON.stringify(itemStore));
    console.log(localStorage)
}

function renderViews(array = []){
    list.innerHTML= '' 
    array.forEach((item, i)=>{
        input.value= '';

        const DetBtn = document.createElement('button')
        const MarkBtn = document.createElement('button');
        const UpdateBtn = document.createElement('button');
        const listText = document.createElement('span');
        const listId = document.createElement('span')
        const listItem = document.createElement('li');

        const setActive =(listTextColor = '', MarkBtnColor = '')=>{
            listText.style.color = listTextColor;
            MarkBtn.style.color = MarkBtnColor;
        }

        listItem.appendChild(listText);
        listText.textContent = item.name;
        listItem.appendChild(DetBtn);
        DetBtn.textContent = 'Delete';
        listItem.appendChild(MarkBtn);
        MarkBtn.textContent = 'mark';
        listItem.appendChild(UpdateBtn);
        UpdateBtn.textContent = 'update';

        if (item.done) {
            setActive('green', 'blue');
        }
        list.appendChild(listItem)

        DetBtn.addEventListener('click', ()=>{
            itemStore.splice(i, 1);
            localStorage.setItem('myObj', JSON.stringify(itemStore));
            renderViews(itemStore);
        })
        UpdateBtn.addEventListener('click', ()=>{
                if (UpdateBtn.style.backgroundColor === ''){
                    listText.setAttribute('ContentEditable', true);
                    UpdateBtn.setAttribute('class', 'green');
                    UpdateBtn.textContent = 'saved';
                    UpdateBtn.style.backgroundColor = 'green';
                }else{
                    listText.setAttribute('ContentEditable', false)
                    UpdateBtn.setAttribute('class', 'grey');
                    UpdateBtn.textContent = 'edit';
                    UpdateBtn.style.backgroundColor = 'black';
                    itemStore[i].name = listText.textContent;
                    localStorage.setItem('myObj', JSON.stringify(itemStore));
                }
                localStorage.setItem('myObj', JSON.stringify(itemStore));
        });
        MarkBtn.addEventListener('click', ()=>{

            if (itemStore[i].done == false) {
                itemStore[i].done = true;
                setActive('green', 'blue');
               
            }else{
                itemStore[i].done = false;
                setActive();
            }
            localStorage.setItem('myObj', JSON.stringify(itemStore));
        })
    }) 
    if (array.length == 0) {
       list.innerHTML = 'search not found';
    }
}

search.addEventListener('keyup', (e)=>{
    if (e.key == 'Enter') {
        if (e.target.value == 'latest' || e.target.value == 'earliest' ) {
            itemStore.reverse()
            renderViews(itemStore)
            return
        }
        if (e.target.value == 'done') {
            const antherRender = itemStore.filter(function(nbj) {
            return nbj.done;
        })
        renderViews(antherRender)
        return
        }
        if (e.target.value == 'id') {
            const neRender = itemStore.filter(function(nbj) {
                return nbj.id == e.target.value;
           })
        renderViews(neRender);
        return 
        }
        const newRender = itemStore.filter(function(nbj) {
            return nbj.name == e.target.value;
        })
        renderViews(newRender);
        return
    }
    renderViews(itemStore);
    })

const theStorage = localStorage.getItem('myObj');
if(theStorage){
    const red = JSON.parse(theStorage);
    if (red && Array.isArray(red) && red.length) {
        itemStore = red;
        renderViews(red);
    }
}

