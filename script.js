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
    if(num2===0) {
        return("Invalid");
    }
    return num1/num2;
}

// Operator Function
function operate(operator,num1,num2) {
    if(operator==="+") {
        return add(num1,num2);
    } else if(operator==="-"){
        return sub(num1,num2);
    } else if(operator==="*") {
        return mul(num1,num2);
    } else if(operator==="/") {
        return div(num1,num2);
    } else {
        return "Invalid Operator";
    }
}

