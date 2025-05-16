function verificar(event) {
    if (event) event.preventDefault();
    const num = parseInt(document.getElementById("numero").value);
    const resultado = document.getElementById("resultado");
    const arrayNum = num.toString().split("");
    const arrayInvertida = arrayNum.slice().reverse();
    let numInt = parseInt(0);
    let invInt = parseInt(0);

    for (let i = 0; i < arrayNum.length; i++) {
        numInt += arrayNum[i];
        invInt += arrayInvertida[i];
    }

    resultado.classList.remove('nao', 'sim', 'text-light');

    if (numInt == invInt) {
        resultado.classList.add('sim')
        resultado.innerHTML = `É um palíndromo`
    } else {
        resultado.classList.add('nao')
        resultado.innerHTML = `Não é um palíndromo`
    }
}