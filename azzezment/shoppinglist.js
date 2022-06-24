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

        const listBtn = document.createElement('button')
        const listMarBtn = document.createElement('button');
        const listUpBtn = document.createElement('button');
        const listText = document.createElement('span');
        const listId = document.createElement('span')
        const listItem = document.createElement('li');

        listItem.appendChild(listText)
        listText.textContent = item.name
        listItem.appendChild(listBtn)
        listBtn.textContent = 'Delete'
        listItem.appendChild(listMarBtn);
        listMarBtn.textContent = 'mark';
        listItem.appendChild(listUpBtn);
        listUpBtn.textContent = 'update';
        list.appendChild(listItem)

        function Button() {
            listBtn.style.backgroundColor = 'red'
        }
        Button();

        listBtn.addEventListener('click', ()=>{
            if (confirm("do you want to delete ?")) {
                listItem.remove(list);   
            }
        })
        listUpBtn.addEventListener('click', ()=>{
                if (itemStore[i].name == input.value && listText.textContent){
                    itemStore[i].name = listText.setAttribute('ContentEditable', true)
                    // listText.textContent
                    listUpBtn.setAttribute('class', 'green');
                    listUpBtn.textContent = 'saved';
                    listUpBtn.style.backgroundColor = 'green'
                }else{
                    itemStore[i].name = listText.setAttribute('ContentEditable', false)
                    listUpBtn.setAttribute('class', 'grey');
                    listUpBtn.textContent = 'edit';
                    listUpBtn.style.backgroundColor = 'grey'  
                }
                localStorage.setItem('myObj', JSON.stringify(itemStore));
                console.log(localStorage) 
                console.log(listUpBtn)
        });
        listMarBtn.addEventListener('click', ()=>{

            if (itemStore[i].done == false) {
                itemStore[i].done = true;
                localStorage.setItem('myObj', JSON.stringify(itemStore));
                listText.style.backgroundColor = 'green';
                listMarBtn.style.backgroundColor = 'blue';
               
            }else{
                itemStore[i].done = false;
                listText.style.backgroundColor = '';
                listMarBtn.style.backgroundColor = '';
            }
            console.log(localStorage)
        })
    }) 
    if (array.length == 0) {
       list.innerHTML = 'search not found'
    }
    // input.focus()
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
    if (red && Array.isArray && red.length) {
        itemStore = red;
        renderViews(red);
    }
}

