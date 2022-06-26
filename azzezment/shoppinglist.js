//create this text
const button = document.querySelector('button')
const input = document.querySelector('input')
const list = document.querySelector('ul')
const search = document.querySelector('#search')
// create button listener and function
button.addEventListener('click', ()=>{
    if (input.value != '') {
         storeItem(input.value); 
    renderViews(itemStore);    
    }})
//create the array that keeps the object created
let itemStore = [];
// the id-generator
function idGenerator() {
    return 'number'+ Math.floor(Math.random() * (1000+1)) 
}
// this functin creates and push object created into the created array
//it as has a local storage that saves the object created
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
//this function helps render or project the object created to the html
//this function also creates the neccessary elements or functinaities for the object 
function renderViews(array = []){
    //this clears the inner html 
    list.innerHTML= '' 
    //this is used to loop through the array and create elements of the object
    array.forEach((item, i)=>{
        //this empty the text area
        input.value= '';
//this are the elements created by the render view to serve as a function of the object
        const DetBtn = document.createElement('button')
        const MarkBtn = document.createElement('button');
        const UpdateBtn = document.createElement('button');
        const listText = document.createElement('span');
        const listId = document.createElement('span')
        const listItem = document.createElement('li');
//this is just to switch colours
        const setActive =(listTextColor = '', MarkBtnColor = '')=>{
            listText.style.color = listTextColor;
            MarkBtn.style.color = MarkBtnColor;
        }
// in this set we append all our created elements to the list (which is the ul)
        listItem.appendChild(listText);
        listText.textContent = item.name;
        listItem.appendChild(DetBtn);
        DetBtn.textContent = 'Delete';
        listItem.appendChild(MarkBtn);
        MarkBtn.textContent = 'mark';
        listItem.appendChild(UpdateBtn);
        UpdateBtn.textContent = 'update';
//a function of the update button 
        if (item.done) {
            setActive('green', 'blue');
        }
        list.appendChild(listItem)
//events listeners are being added to some of the created elements
//to make them function. 
// note- all the element created that has an event listener are to be stored in the local storage
        DetBtn.addEventListener('click', ()=>{
            if (window.confirm('do you want to delete')) {
            itemStore.splice(i, 1);
            localStorage.setItem('myObj', JSON.stringify(itemStore));
            renderViews(itemStore);
        }}
        )
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
                    UpdateBtn.style.backgroundColor = '';
                    itemStore[i].name = listText.textContent;
                    localStorage.setItem('myObj', JSON.stringify(itemStore));
                }
                localStorage.setItem('myObj', JSON.stringify(itemStore));
        });
        MarkBtn.addEventListener('click', ()=>{
            //use index to set this condition
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
// this statement is trigerred when the input value is not the array 
    if (array.length == 0) {
       list.innerHTML = 'search not found';
    }
}
// the search area
// event listener is added to the search and also the value enter was set to keyup
search.addEventListener('keyup', (e)=>{
    if (e.key == 'Enter') {
        if (e.target.value == 'latest' || e.target.value == 'earliest' ) {
            //if both eariest and latest are true reverse the array and render it 
            itemStore.reverse()
            renderViews(itemStore)
            return
        }
        if (e.target.value == 'done') {
             //if item are marked done, filter the array and render it 
            const antherRender = itemStore.filter(function(nbj) {
            return nbj.done;
        })
        renderViews(antherRender)
        return
        }
        if (e.target.value == 'id') {
             //if item are searched by id, filter the array and render it 
            const neRender = itemStore.filter(function(nbj) {
                return nbj.id == e.target.value;
           })
        renderViews(neRender);
        return 
        }
         //if item inputed, filter the array and render it 
        const newRender = itemStore.filter(function(nbj) {
            return nbj.name == e.target.value;
        })
        renderViews(newRender);
        return
    }
    //return the array(origina)
    renderViews(itemStore);
    })

// the ppuar local storage
//this helps to save yur item so whenever you shutdown or restart your system your items are still there
const theStorage = localStorage.getItem('myObj');
if(theStorage){
    const red = JSON.parse(theStorage);
    if (red && Array.isArray(red) && red.length) {
        itemStore = red;
        renderViews(red);
    }
}

