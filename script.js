

function ADD() {

  let a, b, c;
  a = parseInt(document.getElementById("num1").value)
  b =parseInt(document.getElementById("num2").value)
  c = a + b;
  document.getElementById("res").value = c;

}
function SUB() {

  let a, b, c;
  a = parseInt(document.getElementById("num1").value)
  b =parseInt(document.getElementById("num2").value)
  c = a - b;
  document.getElementById("res").value = c;

}

function DIV() {

  let a, b, c;
  a = parseInt(document.getElementById("num1").value)
  b = parseInt(document.getElementById("num2").value)
  c = a / b;
  document.getElementById("res").value = c;

}

function MUL() {

  let a, b, c;
  a = parseInt(document.getElementById("num1").value)
  b =parseInt(document.getElementById("num2").value)
  c = a * b;
  document.getElementById("res").value = c;

}



function RESET() {
  document.getElementById("num1").value = "";
  document.getElementById("num2").value = "";
  document.getElementById("res").value = "";
}
