
function calcularIMC(){
  const peso = document.getElementById("peso").value;
  const altura = document.getElementById("altura").value;
  
  let imc = (peso/(altura*altura)).toFixed(1)

  let resultado;
  
  if ( imc < 18.5) {
    resultado= "abaixo do peso"
  }else if (imc >=18.5 && imc < 24.9){
    resultado= "peso normal"
  }else if (imc >=25 && imc < 29.9){
    resultado ="sobrepeso"
  }else if (imc >=30 && imc<34.9){
    resultado ="obesidade grau I"
  }else if (imc >=35 && imc<39.9){
    resultado ="obesidade grau II"
  }else if (imc >= 40){
    resultado ="obesidade grau III ou mórbida"
  }
    document.getElementById("resultado").innerText = "seu imc: " + imc + "você está com" + resultado + "."
  }