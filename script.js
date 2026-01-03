let addTask = document.querySelector("#add-task")
let addInput = document.querySelector("#input-write-task");
let taskItems = document.querySelector("#task-items");
let taskNumber = 0;


addTask.addEventListener("click",function(){
    if (addInput.value == ''){
        console.error("Enter a task first")
    }else{
          //  taskNumber = taskNumber+1;
            //console.log(taskNumber)
           let deleteBtn = document.createElement("button")
            deleteBtn.innerText = "Delete Task"
           let li = document.createElement("li");
            li.setAttribute("id",taskNumber);
            console.log(addInput.value)
            li.innerText = addInput.value;
            taskItems.appendChild(li)
            li.appendChild(deleteBtn)
            addInput.value = '';
        
        
            deleteBtn.addEventListener("click",function(){
             //console.log(li.getAttribute("id"));
             
                li.remove()








            })
        

















        }


})

