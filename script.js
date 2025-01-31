const display=document.querySelector(".display");
const numberButtons=document.querySelectorAll(".number");
const operatorButtons=document.querySelectorAll(".operator");
const equalButton=document.querySelector(".equal");
const clearButton=document.querySelector(".clear");

let firstOperand="";
let secondOperand="";
let currentOperation=null;
let shouldResetScreen=false;


//Event Listeners
clearButton.addEventListener("click",clear);
equalButton.addEventListener("click",evaluate);

//Number Button Event Listener
operatorButtons.forEach(button=>{
    button.addEventListener("click",()=>setOperation(button.textContent));
});

numberButtons.forEach(button=>{
    button.addEventListener("click",()=>appendNumber(button.textContent));
});



//Functions
//Display Function
function appendNumber(number) {
    if(display.textContent==="0" || shouldResetScreen) {
        resetScreen();
    }
    display.textContent+=number;
}


function resetScreen() {
    display.textContent="";
    shouldResetScreen=false;    
}

//When we press C display is cleared
function clear() {
    firstOperand="";
    secondOperand="";
    display.textContent="0";
    currentOperation=null;
}

//Set the operator
function setOperation(operator) {
    if(currentOperation) {
        if(shouldResetScreen) {
            currentOperation=operator;
            return;
        } else {
            evaluate();
        }
    }
    //if (currentOperation !== null) evaluate()
    firstOperand = display.textContent
    currentOperation = operator
    //display.textContent = `${firstOperand}`
    shouldResetScreen = true
}

function evaluate() {
    if(currentOperation===null) return
    if(currentOperation==="/"&& display.textContent==="0") {
        alert("CANT DIVIDE BY 0")
        return
    }
    secondOperand=display.textContent;
    display.textContent=roundResult(operate(firstOperand,secondOperand,currentOperation));
    currentOperation=null;
}

function roundResult(number){
    return Math.round(number*1000)/1000;
}

//toggle sign

//percentage sign

// Operator Function
function operate(num1,num2,operator) {
    num1=Number(num1);
    num2=Number(num2);
    switch(operator){
        case "+":
            return add(num1,num2);
        case "-":
            return sub(num1,num2);
        case "*":
            return mul(num1,num2);
        case "/":
            if(num2===0) return null
            else {
            return div(num1,num2);
            }
        default:
            return null;
    }
}


// Maths Functions
function add(num1,num2) {
    return num1+num2;
}

function sub(num1,num2) {
    return num1-num2;
}

function mul(num1,num2) {
    return num1*num2;
}

function div(num1,num2) {
        return num1/num2;
}

