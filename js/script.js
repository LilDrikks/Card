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
    history.back()
}

function proxima() {
    history.forward()
}