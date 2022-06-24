// Create needed constants
const list = document.querySelector('ul');
const titleInput = document.querySelector('#title');
const bodyInput = document.querySelector('#body');
const form = document.querySelector('form');
const submitBtn = document.querySelector('form button');

let db;
const openRequest = window.indexedDB.open('notes_db' , 1);

openRequest.addEventListener('error', ()=>
console.error('database failed to open'));

openRequest.addEventListener('success', ()=>
console.error('database opened sucessfully'));
db = openRequest

