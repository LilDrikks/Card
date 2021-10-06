filho.addEventListener('click', () => {
    var teste = document.getElementById("h1btn").innerHTML
    if (teste == "Click-here-again") {
        filho.classList.toggle('animar');
        document.getElementById("h1btn").innerHTML = "Click-here";
    } else {
        filho.classList.toggle('animar');
        document.getElementById("h1btn").innerHTML = "Click-here-again";
    }
})



function voltar() {
    history.back();
}

function proxima() {
    history.forward();
}


//aula de javascript funcional 

function evento() {
    console.log("Ola Mundo");
}

let valor1 = 10;
let valor2 = 20;
let valor3 = "3";

function somarValor(primeiro, segundo) {
    console.log(primeiro + segundo);
}
//soma o valor 9 com o valor numérico da variável valor1
somarValor(9, valor1);
somarValor(valor1, valor2);
somarValor(valor2, valor3);
somarValor("100", valor3);