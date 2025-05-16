function verificar(event) {
    if (event) event.preventDefault();
    const M = /[A-Z]/;
    const m = /[a-z]/;
    const N = /[0-9]/;
    const C = /[!@#$%^&*()]/;
    const senha = document.getElementById("senha").value;

    const validacoes = [
        M.test(senha),
        N.test(senha),
        m.test(senha),
        C.test(senha),
        senha.length >= 8
    ];

    const contador = validacoes.reduce((acc, validacao) => {
        if (validacao) {
            acc.trueCount += 1;
        } else {
            acc.falseCount += 1;
        }
        return acc;
    },
        { trueCount: 0, falseCount: 0 }
    );

    resultado.classList.remove('fraca', 'quase-forte', 'forte', 'text-light');

    if (contador.trueCount === 5) {
        resultado.classList.add('forte');
        resultado.innerHTML = 'Senha forte!';
    } else if (contador.trueCount === 4) {
        resultado.classList.add('quase-forte');
        resultado.innerHTML = 'Senha quase forte!';
    } else {
        resultado.classList.add('fraca');
        resultado.innerHTML = 'Senha fraca!';
    }
}