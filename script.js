const erase = document.getElementById("erase");
const clear= document.getElementById("clear");
const one = document.getElementById("1");
const two = document.getElementById("2");
const three = document.getElementById("3");
const four = document.getElementById("4");
const five = document.getElementById("5");
const six = document.getElementById("6");
const seven = document.getElementById("7");
const eight = document.getElementById("8");
const nine = document.getElementById("9");
const zero = document.getElementById("z");
const doublezero = document.getElementById("zz");
const multiplication= document.getElementById("mul");
const addition = document.getElementById("add");
const sub = document.getElementById("subtract");
const division = document.getElementById("div");
const modulus = document.getElementById("mod");
const equal = document.getElementById("equal");
const point = document.getElementById("point");
const type = document.getElementById("type");
const result = document.getElementById("resultant");

one .onclick = () => {
    type_to(1);
}
two .onclick = () => {
    type_to(2);
}
three .onclick = () => {
    type_to(3);
}
four.onclick = () => {
    type_to(4);
}
five.onclick = () => {
    type_to(5);
}
six.onclick = () => {
    type_to(6);
}
seven.onclick = () => {
    type_to(7);
}
eight.onclick = () => {
    type_to(8);
}
nine.onclick = () => {
    type_to(9);
}
zero.onclick = () => {
    type_to(0);
}
doublezero .onclick = () => {
    type_to("00");
}
addition.onclick = () => {
    type_to("+");
}
sub.onclick = () => {
    type_to("-");
}
multiplication.onclick = () => {
    type_to("X");
}
modulus.onclick = () => {
    type_to("%");
}
division.onclick = () => {
    type_to("/");
}
point.onclick = () => {
    type_to(".");
}
equal.onclick = () => {
    calculate();
}
clear.onclick = () => {
    clearscreen();
}
erase.onclick = () => {
    erasescreen();
}


document.onkeyup = e => {
    if(e.key === "0" || e.key === "Num0"){
        type_to(0);
    }
    else if(e.key === "1" || e.key === "Num1"){
        type_to(1);
}
else if(e.key === "2" || e.key === "Num2"){
    type_to(2);
}
else if(e.key === "3" || e.key === "Num3"){
    type_to(3);
}
else if(e.key === "4" || e.key === "Num4"){
    type_to(4);
}
else if(e.key === "5" || e.key === "Num5"){
    type_to(5);
}
else if(e.key === "6" || e.key === "Num6"){
    type_to(1);
}
else if(e.key === "7" || e.key === "Num7"){
    type_to(7);
}
else if(e.key === "8" || e.key === "Num8"){
    type_to(8);
}
else if(e.key === "9" || e.key === "Num9"){
    type_to(9);
}
else if(e.key === "+" || e.key === "Num+"){
    type_to("+");
}
else if(e.key === "-" || e.key === "Num-"){
    type_to("-");
}
else if(e.key === "/" || e.key === "Num/"){
    type_to("/");
}
else if(e.key === "%" || e.key === "Num%"){
    type_to("%");
}
else if(e.key === "x" || e.key === "Numx"){
    type_to("x");
}
else if(e.key === "." || e.key === "Num."){
    type_to(".");
}
else if(e.key === "Enter" || e.key === "Numenter"){
    calculate();
}
else if(e.key === "=" || e.key === "Num="){
    calculate();
}
else if(e.key === "Delete"){
    clearscreen();
}
else if(e.key === "Backspace" || e.key === "Escape"){
    erasescreen();
}
else{
    alert("only numbers are allowed")
}
}

var type_to = text =>{
    if(type.innerText == ""){
        type.innerText = text;
    }
    else if(type.innerText.length <= 23){
        type.innerText = type.innerText + text;
    }
    else{
        alert("digit limit reached")
    }
}

var calculate = () => {
    var res = type.innerText;
    if( res.indexOf("%") === -1){
        if(res.indexOf("X") != -1){
            res = res.replace("X","*")
        }   
    }else{
        res = res.replace("%" , "");
        if(res.indexOf("X") != -1){
            var res_ar = res.split("X");
            var total = eval(res_ar[0]);
            var need = eval(res_ar[1]);
            res = (need / 100)*total;
        }else{
            alert("math error");
        }
    }
    result.innerText = eval(res);
}

var clearscreen = () => {
    type.innerText="";
}

var erasescreen = () => {
    type.innerText = type.innerText.slice(0,-1)
}




