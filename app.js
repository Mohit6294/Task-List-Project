//Define ui variables

const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

//Load all event listners

loadEventListeners();

//Load all event listneres

function loadEventListeners(){
  //add task event
  form.addEventListener('submit',addTask);
}

//add task
function addTask(){

if(taskInput.value === ''){
  alert('Add a task');
}
// create li element
const li = document.createElement('li');

//add class
li.className = 'collection-item';
//create text node and append to li
li.appendChild(document.createTextNode(taskInput.value));

const link = document.createElement('a');
//add class
link.className='delete-item secondary-content';

//Add icon html

link.innerHTML = '<i class="fa fa-remove"></i>';

//append link to li

li.appendChild(link);

//append li to ul
console.log(li);




 // e.preventDefault();

}
