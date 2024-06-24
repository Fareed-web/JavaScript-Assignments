document.querySelector('#login-btn').onclick = function() {
    const email = document.querySelector('#email').value;
    if(email.length == 0){
        alert("Kindly Enter Email!!!!");
    } else {
        localStorage.setItem('userEmail', email);
        document.querySelector('#login').style.display = 'none';
        document.querySelector('#newtask').style.display = 'block';
        loadTasks(email);
    }
}

document.querySelector('#push').onclick = function(){
    const email = localStorage.getItem('userEmail');
    const taskInput = document.querySelector('#newtask input');
    if(taskInput.value.length == 0){
        alert("Kindly Enter Task Name!!!!")
    } else {
        let tasks = JSON.parse(localStorage.getItem(email)) || [];
        tasks.push(taskInput.value);
        localStorage.setItem(email, JSON.stringify(tasks));
        taskInput.value = '';
        loadTasks(email);
    }
}

function loadTasks(email) {
    const tasks = JSON.parse(localStorage.getItem(email)) || [];
    const tasksContainer = document.querySelector('#tasks');
    tasksContainer.innerHTML = '';
    tasks.forEach(task => {
        const taskElement = document.createElement('div');
        taskElement.classList.add('task');

        const taskName = document.createElement('span');
        taskName.id = 'taskname';
        taskName.innerText = task;

        const deleteBtn = document.createElement('button');
        deleteBtn.classList.add('delete');
        deleteBtn.innerHTML = '<i class="far fa-trash-alt"></i>';
        deleteBtn.onclick = function() {
            const taskIndex = tasks.indexOf(task);
            if (taskIndex > -1) {
                tasks.splice(taskIndex, 1);
            }
            localStorage.setItem(email, JSON.stringify(tasks));
            loadTasks(email);
        }

        taskElement.appendChild(taskName);
        taskElement.appendChild(deleteBtn);
        tasksContainer.appendChild(taskElement);
    });
}
