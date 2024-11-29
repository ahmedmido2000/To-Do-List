let input =document.querySelector(".add-container input")
let addIcon =document.querySelector(".add-container i")
let taskContainer =document.querySelector(".tasks-container")
let noTasks=document.querySelector(".tasks-container span")
let tasks=document.querySelector(".tasks-number span")
let completed=document.querySelector(".tasks-completed span")
let completeAll=document.getElementById("complete")
let deleteAll=document.getElementById("delete")

window.onload=load
function load(){
    if(localStorage.length>0){
        noTasks.remove()
        for(let i=0;i<localStorage.length;i++){
            let mainSpan=document.createElement("span")
            let mainSpanText = document.createTextNode(localStorage.key(i))
            mainSpan.appendChild(mainSpanText)
            let deleteButton = document.createElement("span")
            let deleteText = document.createTextNode("Delete")
            deleteButton.appendChild(deleteText)
            deleteButton.classList.add("delete")
            mainSpan.classList.add("box")
            let mainMain=document.createElement("span")
            mainMain.appendChild(mainSpan)
            mainMain.appendChild(deleteButton)
            taskContainer.appendChild(mainMain)
        }
        tasks.innerHTML=localStorage.length
    }
}
addIcon.onclick=function(){
    if(input.value==""){
        alert("Empty Field")
    }
    else{
        noTasks.remove()
        if( localStorage.getItem(input.value)){
            alert("already added")
        }
        else{
            let mainSpan=document.createElement("span")
            let mainSpanText = document.createTextNode(input.value)
            mainSpan.appendChild(mainSpanText)
            let deleteButton = document.createElement("span")
            let deleteText = document.createTextNode("Delete")
            deleteButton.appendChild(deleteText)
            deleteButton.classList.add("delete")
            mainSpan.classList.add("box")
            let mainMain=document.createElement("span")
            mainMain.appendChild(mainSpan)
            mainMain.appendChild(deleteButton)
            taskContainer.appendChild(mainMain)
            localStorage.setItem(input.value,"text")
            tasks.innerHTML++
        }
        input.value=""
        input.focus()
    }
}

deleteAll.onclick=function(){
    localStorage.clear()
    location.reload()
    load()
}


taskContainer.addEventListener("click",(e)=>{
    if(e.target.classList.contains("delete")){
        e.target.parentElement.remove()
        tasks.innerHTML--
        localStorage.removeItem(e.target.parentElement.children[0].innerHTML)
        location.reload()
    }
})














// window.onload=function(){
//     input.focus()
//         let mainSpan=document.createElement("span")
//         let mainSpanText = document.createTextNode(localStorage.getItem(input.value))
//         mainSpan.appendChild(mainSpanText)
//         let deleteButton = document.createElement("span")
//         let deleteText = document.createTextNode("Delete")
//         deleteButton.appendChild(deleteText)
//         deleteButton.classList.add("delete")
//         mainSpan.classList.add("box")
//         mainSpan.appendChild(deleteButton)
//         taskContainer.appendChild(mainSpan)
// }
// let main;

// addIcon.onclick =function(){

//     if(input.value ===""){
//         alert("Empty Field")
//     }
//     else{
//         let noTasks=document.querySelector(".tasks-container span")
//         if(document.body.contains(document.querySelector(".no-tasks"))){

//             noTasks.remove()
//         }
//         if(localStorage.getItem(input.value)){
//             alert("the element is exist")
//             input.value=""
//         }
//         else{
//             let mainSpan=document.createElement("span")
//         let mainSpanText = document.createTextNode(input.value)
//         mainSpan.appendChild(mainSpanText)
//         let deleteButton = document.createElement("span")
//         let deleteText = document.createTextNode("Delete")
//         deleteButton.appendChild(deleteText)
//         deleteButton.classList.add("delete")
//         mainSpan.classList.add("box")
//         mainSpan.appendChild(deleteButton)
//         taskContainer.appendChild(mainSpan)
//         localStorage.setItem(input.value,"text")
//         input.value=""
//         input.focus()
//         counters()

//         }
        
//     }
// }

//     document.addEventListener('click',function(e){
//         if(e.target.className=="delete"){
//             e.target.parentNode.remove()
//             localStorage.removeItem(input.value)

//             if(taskContainer.childElementCount == 0){
//                 noTasksYet()
//             }
//         }
//         if(e.target.classList.contains("box")){
//             e.target.classList.toggle("complete")
//         }
//         counters()
//     })

// completeAll.onclick=function(){
//     let x= document.querySelectorAll(".box")
//     x.forEach((item)=>{
//         item.classList.add("complete")
//     })
// }
// deleteAll.onclick=function(){
//     let y=document.querySelectorAll(".box")
//     y.forEach((item)=> {
//         item.remove()
//         localStorage.clear()
//     })
//     noTasksYet()
// }


// function noTasksYet(){
//     let noTasks=document.createElement("span")
//     let words=document.createTextNode("No Tasks Yet")
//     noTasks.appendChild(words)
//     noTasks.classList.add("no-tasks")
//     taskContainer.appendChild(noTasks)
// }

// function counters(){
//     tasks.innerHTML=document.querySelectorAll(".box").length


//     completed.innerHTML=document.querySelectorAll(".complete").length
// }
// let localItems=document.querySelectorAll(".box").innerHTML
// localStorage.setItem("ToDo" ,localItems)