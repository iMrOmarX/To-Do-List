let submitBtn = document.getElementById('add-to-do-btn')
let input = document.getElementById('to-do-input')
let form = document.getElementById('to-do-form')
let list = document.getElementById("to-do-list")

let submitFunction = () => {
    if(input.value == ""){
        return 
    }
    let lastTask = document.getElementById('last-task')
    lastTask.id = ""

    let newToDo = document.createElement('ul')
    newToDo.innerHTML = input.value
    newToDo.classList += "to-do-task"
    newToDo.id = "last-task"
    list.appendChild(newToDo)
}   

// Dark Mode Implementation

let darkModeCheck = document.getElementById("dark-mode-checkbox")

let body = document.querySelector('body')
let header = document.querySelector('h1')
let toDoListSection = document.getElementById("to-do-list-section")

darkModeCheck.onclick = () => {
    if(darkModeCheck.checked) {
        body.style.background = "#22252e"
        body.style.color = "#e6dfc6"
        header.style.backgroundColor = "#3a3e4a"
        toDoListSection.style.borderRightColor = "#e6dfc6"
    } else {
        body.style.background = "white"
        body.style.color = "black"
        header.style.backgroundColor = "#82d3f6"
        toDoListSection.style.borderRightColor = "black"
    }
}
