
function comparaNums(num1, num2) {
    const primeiraFrase = criaPrimeiraFrase(num1, num2);
    const segundaFrase = criaSegundaFrase(num1, num2);

    return `${primeiraFrase} ${segundaFrase}`
}

function criaPrimeiraFrase(num1, num2) {
    let saoIguais = '';

    if (num1 !== num2) {
        saoIguais = 'não';
    }

    return `Os numeros ${num1} e ${num2} ${saoIguais} sáo iguais.`
};

function criaSegundaFrase(num1, num2) {
    const soma = num1 + num2;


    let resultadoDez = 'menor';
    let resultadoVinte = 'menor';
    const compara10 = soma > 10;
    const compara20 = soma > 20;

    if (compara10) {
        resultadoDez = 'Maior';
    }

    if (compara20) {
        resultadoVinte = 'Maior';
    }

    return `Sua soma e: ${soma}, que e ${resultadoDez} que 10 e ${resultadoVinte} que 20.`

};


console.log(comparaNums(1, 20));