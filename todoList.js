
 let inputField=document.getElementById("inputField");
let todoContainer=document.getElementById("todoContainer");
let btn=document.getElementById("btn");

 
inputField.addEventListener("keydown", function(event){
    if(event.key==="Enter"){
        let inputValue=inputField.value;
        if(!inputValue){
            alert("please fill in a task");
        }else{
            let parentEle=document.createElement("div"); 
            let inputEle=document.createElement("input");
            let childEle=document.createElement("div");
            let btnEdit=document.createElement("button");
            let btnDel=document.createElement("button");
            parentEle.classList.add("todoItem");
            inputEle.setAttribute("readonly", "readonly");
            inputEle.classList.add("todoInput");
            inputEle.type="text";
            inputEle.value=inputValue;
            parentEle.appendChild(inputEle);
            btnEdit.innerHTML="Edit";
            btnEdit.classList.add("btn");
            childEle.appendChild(btnEdit);
            btnDel.innerHTML="Delete";
            btnDel.classList.add("btn");
            childEle.appendChild(btnDel);
            parentEle.appendChild(childEle);
            todoContainer.appendChild(parentEle);
            inputField.value="";

            
            btnEdit.addEventListener("click",()=>{
                if(btnEdit.innerHTML==="Edit"){
                    inputEle.removeAttribute("readonly");
                    inputEle.focus();
                    btnEdit.innerHTML="Save";

                }else{
                    inputEle.setAttribute("readonly", "readonly");
                    btnEdit.innerHTML="Edit";
                }
            } )
            btnDel.addEventListener("click", ()=>{
                parentEle.remove();
            })

        }

    }
   
})


