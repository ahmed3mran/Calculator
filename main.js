var display = document.getElementById('display')

function calcute(c){
    display.value += c;
}
function clearScreean(){
    display.value =''
}
function calc(){
    display.value = eval(display.value)
}