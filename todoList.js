let inputField=document.getElementById("inputField");
let todoContainer=document.getElementById("todoContainer");
let btn=document.getElementById("btn");
console.log(btn);


btn.addEventListener("click", function(){
    let parentDiv=document.createElement("div");
    let  childDiv=document.createElement("div");
    let checkIcon=document.createElement("i");
    let trashIcon=document.createElement("i");
    parentDiv.classList.add("todoItem");
    parentDiv.innerHTML='<div>'+inputField.value+'</div>';
    console.log(parentDiv);
    checkIcon.className="fas fa-check-square";
    checkIcon.addEventListener("click", ()=>{
     checkIcon.style.color="green";
    });
    trashIcon.className="fas fa-trash";
    trashIcon.style.color="darkgray";
    trashIcon.addEventListener("click", ()=>{
    parentDiv.remove();
    });
    childDiv.appendChild(checkIcon);
    childDiv.appendChild(trashIcon);
    parentDiv.appendChild(childDiv);
    todoContainer.appendChild(parentDiv);
    inputField.value="";
});

