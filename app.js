
//Define UI vars

const form = document.querySelector("#task-form");
const taskList = document.querySelector(".collection");
const clearBtn = document.querySelector(".clear-tasks");
const filter = document.querySelector("#filter");
const taskInput = document.querySelector("#task");

//Load all event listners
loadEventListeners();

//Load all event listners

function loadEventListeners() {

//DOM Load event
  document.addEventListener('DOMContentLoaded',getTasks);

  //Add task event
  form.addEventListener("submit", addTask);
  
  //remvoe task event
  taskList.addEventListener('click',removeTask);

  //clear task event
  clearBtn.addEventListener('click',clearTasks);


  //Filter tAsks
  filter.addEventListener('keyup',filterTask);



}


//Get Tasks from Local Storage
function getTasks() {
  let tasks;
  if(localStorage.getItem('tasks') === null){
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks')
      );
  }

  tasks.forEach(function(task){
    // Create li element
    const li = document.createElement('li');
    // Add class
    li.className = 'collection-item';
    // Create text node and append to li
    li.appendChild(document.createTextNode(task));
    // Create new link element
    const link = document.createElement('a');
    // Add class
    link.className = 'delete-item secondary-content';
    // Add icon html
    link.innerHTML = '<i class="fa fa-remove"></i>';
    // Append the link to li
    li.appendChild(link);

    // Append li to ul
    taskList.appendChild(li);
  });
}

//Add task
function addTask(e) {
  if (taskInput.value === "") {
    alert("Add a task");
  }
  //Create LI elements
  const li = document.createElement('li');
  //Add class
  li.className='collection-item';
  //Create text node and append to li
  li.appendChild(document.createTextNode(taskInput.value));
  //create new link element
  const link = document.createElement('a');
  //add class
  link.className = 'delete-item secondary-content';
  //add icon html
  link.innerHTML='<i class="fa fa-remove"></i>';


  //append link to li
  li.appendChild(link);

  //store task in local storage
   storeTaskInLocalStorage(taskInput.value);


  //append li to ul
 document.querySelector('ul.collection').appendChild(li);
  //clear input
  taskInput.value='';

  e.preventDefault();
}

//sotre task
function storeTaskInLocalStorage(task){
  let tasks;
  if(localStorage.getItem('tasks') === null){
    tasks = [];
  }else{
    tasks=JSON.parse(localStorage.getItem('tasks'));
  }
  tasks.push(task);


  localStorage.setItem('tasks',JSON.stringify(tasks));
}

//remove task
function removeTask(e){
 if(e.target.parentElement.classList.contains('delete-item')){
  if(confirm('Are you sure?'))
  e.target.parentElement.parentElement.remove();

  //remove from Local storage
  removeTaskFromLocalStorage(e.target.parentElement.parentElement);
 }
  
}

//remove from Local Storage
function removeTaskFromLocalStorage(taskItem){
  let tasks;
  if(localStorage.getItem('tasks') === null){
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks')
      );
  }

  tasks.forEach(function(task,index){
    if(taskItem.textContent === task){
      tasks.splice(index, 1);
    }
  });

  localStorage.setItem('tasks',JSON.stringify(tasks));
}


//clear tasks
function clearTasks(e){
  // taskList.innerHTML='';

  //Faster
  while(taskList.firstChild){
    taskList.removeChild(taskList.firstChild);
  }


  //clear from Local storage
  clearTasksFromLocalStorage();
}

//clar from local storage
function clearTasksFromLocalStorage(){
  localStorage.clear();
}

//Filter Tasks
function filterTask(e){
  const text = e.target.value.toLowerCase();
  document.querySelectorAll('.collection-item').forEach(function(task){
    const item = task.firstChild.textContent;
    if(item.toLowerCase().indexOf(text) != -1){
        task.style.display='block';
    }else{
        task.style.display='none';
    }
  });


  


}