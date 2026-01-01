let addTask = document.querySelector("#add-task")
let addInput = document.querySelector("#input-write-task");
let taskItems = document.querySelector("#task-items");



addTask.addEventListener("click",function(){
     li = document.createElement("li");
    console.log(addInput.value)
    li.innerText = addInput.value;
    taskItems.appendChild(li)
    addInput.value = '';





















    // addInput = '';
   



})