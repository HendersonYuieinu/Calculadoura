const box = document.querySelector("#box");
const keys = document.querySelector("#keys");
const dspl = document.querySelector("#display");
var lastAction;
var a = 0;
var b = 0;

keys.addEventListener("click", e =>{
    const key = e.target;
    const action = key.dataset.action;

    if (e.target.matches("button")){
        if(action){
            console.log("botao pressionado " + key.textContent);
            if(action == "reset"){
                a = 0;
                dspl.innerHTML = 0;
            }
            else if(action == "sum"){
                a = parseFloat(dspl.textContent);
                lastAction = action;
                console.log("ultima acao " + lastAction);
                dspl.innerHTML = 0;
            }
            else if(action == "minus"){
                a = parseFloat(dspl.textContent);
                lastAction = action;
                console.log("ultima acao " + lastAction);
                dspl.innerHTML = 0;
            }
            else if(action == "division"){
                a = parseFloat(dspl.textContent);
                lastAction = action;
                console.log("ultima acao " + lastAction);
                dspl.innerHTML = 0;
            }
            else if(action == "multiply"){
                a = parseFloat(dspl.textContent);
                lastAction = action;
                console.log("ultima acao " + lastAction);
                dspl.innerHTML = 0;
            }
            else if(action == "equal"){
                b = parseFloat(dspl.textContent);
                if(lastAction == "sum"){
                    dspl.innerHTML = a + b;
                }else if(lastAction == "minus"){
                    dspl.innerHTML = a - b;
                }else if(lastAction == "division"){
                    if(b == 0){
                        dspl.innerHTML = "ERROR: Division zero."
                    }else{
                        dspl.innerHTML = a / b;    
                    }
                }else if(lastAction == "multiply"){
                    dspl.innerHTML = a * b;
                }
                console.log(a);
                console.log(b);
                lastAction = action;
            }

        }
        else if(!action){
            console.log(lastAction);
            console.log("numero " + key.textContent + " pressionado");
            if(dspl.textContent == 0 || dspl.textContent == "ERROR: Division zero."){
                dspl.innerHTML = key.textContent;
                console.log(a);
            }else{
                dspl.innerHTML += key.textContent + "<wbr>";
                console.log(a);
                }
            }
            
        }
})
