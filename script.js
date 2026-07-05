const addBtn = document.getElementById('addBtn');
const taskList = document.getElementById('taskList');
const taskInput = document.getElementById('taskInput');
const body = document.querySelector('.card');
const clear = document.getElementById("clearBtn");
const counter = document.getElementById("counter")
const img = './images/'
let values = 0
const remainingCount = document.getElementById("remainingCount")

addBtn.addEventListener("click",()=>{
    if(taskInput.value == ''){
        alert('please first inter input')
    }
    else{
        const text = document.createElement('span')
        const tasks = document.createElement("li");
        const remove_tag = document.createElement("span")
        remove_tag.innerHTML = 'X'
        text.innerHTML = taskInput.value;
        tasks.appendChild(text)
        tasks.appendChild(remove_tag)
        taskList.appendChild(tasks)
        tasks.style.display = 'flex'
        tasks.style.justifyContent = 'space-between'
        values++
        remainingCount.textContent = values;
        text.addEventListener('click',()=>{
           text.style.textDecoration = 'line-through';
           tasks.classList.add('completed')
           values--
           remainingCount.textContent = values;
    })
        remove_tag.addEventListener('click',()=>{
           if(!tasks.classList.contains('completed')){
               values --
            remainingCount.textContent = values;
           }
            tasks.remove()
            remove_tag.remove()
           
        })
    taskList.style.color = 'brown'
    remove_tag.style.color = 'red'
       
    
        
    
    }
    taskInput.value = ''
    
   
  
})

 clear.addEventListener('click',()=>{
    taskList.innerHTML = '';
    values = 0;
    remainingCount.textContent = values;
})

document.querySelectorAll('.color-circle').forEach((btn)=>{
    btn.addEventListener('click',()=>{
        body.style.backgroundColor = btn.dataset.color;
        
    })
})

 