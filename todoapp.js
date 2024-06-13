const inputBox= document.getElementById("task-input")
const listContainer=document.getElementById("list-container")

function AddTask(){
    if(inputBox.value===''){
        alert("Write Something")
    }else{
        let li=document.createElement("li")
        let span=document.createElement("span")
        span.innerHTML="\u00d7"
        li.innerHTML=inputBox.value
        listContainer.appendChild(li)
        li.appendChild(span)
        
    }
    inputBox.value=''
    saveData()
}

listContainer.addEventListener("click",function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked")
        saveData();
    }else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
    saveData();
})

function saveData(){
    localStorage.setItem("data",listContainer.innerHTML)
}

function showData(){
    listContainer.innerHTML=localStorage.getItem("data")
}

showData();