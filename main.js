// Clear screen function
function clearScreen() {
       document.getElementById("result").value = "";
}
    
// Display calculation function
function display(value) {
       document.getElementById("result").value += value;
}
    
// This function evaluates the expression and returns the result
function calculate() {
       var p = document.getElementById("result").value;
       var q = eval(p);
       document.getElementById("result").value = q;
}