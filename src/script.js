let firstValue = parseInt(prompt("Digite o primeiro valor:"));
let operation = prompt("Qual a operação voce deseja fazer?");
let secondValue = parseInt(prompt("Digite o segundo valor:"));
let result = '';

if (operation == "+"){
  result = firstValue + secondValue;
  document.write("<h2>" + firstValue + "+" + secondValue + " = " + result + "</h2>");
}else if(operation == "-"){
  result = firstValue - secondValue;
  document.write("<h2>" + firstValue + "-" + secondValue + " = " + result + "</h2>");
}else if(operation == "x"){
  result = firstValue * secondValue;
  document.write("<h2>" + firstValue + "*" + secondValue + " = " + result + "</h2>");
}else if(operation == "/"){
  result = firstValue / secondValue;
  document.write("<h2>" + firstValue + "/" + secondValue + " = " + result + "</h2>");
}else {
  document.write("<h2>Opção inválida</h2>");
}



 
