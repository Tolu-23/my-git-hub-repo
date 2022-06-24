const button = document.querySelector('button')
const input = document.querySelector('input')
const edit = document.querySelector('input1')
const search = document.getElementById('search')
const list = document.querySelector('ul')


button.addEventListener('click', ()=>{
    const inp = input.value;
    input.value = []

    const listDelBtn = document.createElement('button');
    const listUpBtn = document.createElement('button');
    const listMarBtn = document.createElement('button');
    const listText = document.createElement('span');
    const listItem = document.createElement('li');

    listItem.appendChild(listText);
    listText.textContent = inp;
    listItem.appendChild(listDelBtn);
    listDelBtn.textContent = 'delete';
    listItem.appendChild(listUpBtn);
    listUpBtn.textContent = 'update';
    listItem.appendChild(listMarBtn);
    listMarBtn.textContent = 'mark';
    list.appendChild(listItem);

    function Button() {
        listBtn.style.backgroundColor = 'red'
    }
    Button();
    function markButton() {
        listMarBtn.style.backgroundColor = 'blue'
    }
    markButton();
    listBtn.addEventListener('click', ()=>{
        if (confirm("do you want to delete ?")) {
            listItem.remove(list);   
        }
    })
    listUpBtn.addEventListener('click', ()=>{
        let tet = listUpBtn.getAttribute('class');
            if (tet === 'grey'){
                listText.setAttribute('ContentEditable', true)
                listUpBtn.setAttribute('class', 'green');
                listUpBtn.textContent = 'saved';
            }else{
                listText.setAttribute('ContentEditable', false)
                listUpBtn.setAttribute('class', 'grey');
                listUpBtn.textContent = 'edit';
            }
        console.log(tet)
    });
    listMarBtn.addEventListener('click', ()=>{
        listText.style.backgroundColor = 'green'
        listMarBtn.textContent = 'marked'
    })
}) 
