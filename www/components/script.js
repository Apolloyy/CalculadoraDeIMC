function calcularIMC(){
    var nome;
    var massa;
    var altura;
    var imc;
    


    nome = document.getElementById('nome').value;
    massa = document.getElementById('massa').value;
    altura = document.getElementById('altura').value;

    imc = massa/(altura*altura);
    const controladora = imc.toFixed(2);

    if(imc <= 18.5) {

          document.getElementById('Resultado').textContent = " Oi " + nome + " Seu Imc é: "+ controladora + " e é considerada magreza ";
    }
    else if((imc >18.5) && (imc<=24.9)){
        document.getElementById('Resultado').textContent = "Oi " + nome + "Seu Imc é: "+ controladora + "e é considerada saudavel";
    }
    else if((imc >24.9) && (imc<=29.9)){
        document.getElementById('Resultado').textContent = "Oi " + nome + "Seu Imc é: "+ controladora + "e é considerada acima do peso";
    }
    else if((imc >30) && (imc <=34.9)){
        document.getElementById('Resultado').textContent = "Oi " + nome + "Seu Imc é: "+ controladora + "e é considerada obeso grau 1 ";
    }
    else if((imc>35) && (imc<=39.9)){
        document.getElementById('Resultado').textContent = "Oi " + nome + "Seu Imc é: "+ controladora + "e é considerada obeso grau 2 ";
    }
    else{
        document.getElementById('Resultado').textContent = "Oi " + nome + "Seu Imc é: "+ controladora + "e é considerada morbido vai se tratar mlk ";
    }

  

}
