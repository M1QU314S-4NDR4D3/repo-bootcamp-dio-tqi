
// mostra o prompt
function calculadora() {
    const operacao = Number(prompt("Escolha uma operacao:\n 1 - Soma(+)\n 2 - Subtracao (-)\n 3 - Multiplicacao (*)\n 4 - Divisao Real (/)\n 5 - Divisao Inteira (%)\n 6 - Potenciacao (**)"));

    if (!operacao || operacao >= 7) {
        alert("Erro - Operacao Ivalida");
        calculadora();
    } else {

        let n1 = Number(prompt("Insira o primeiro valor: "));
        let n2 = Number(prompt("Insira o segundo valor: "));
        let resultado;

        if (!n1 || !n2) {
            alert("Erro parametro invalido");
            calculadora();
        } else {

            // operacoes
            function soma() {
                resultado = n1 + n2;
                alert(`${n1} + ${n2} = ${resultado}`);
                novaOperacao();
            }

            function subtracao() {
                resultado = n1 - n2;
                alert(`${n1} - ${n2} = ${resultado}`);
                novaOperacao();
            }

            function multiplicacao() {
                resultado = n1 * n2;
                alert(`${n1} * ${n2} = ${resultado}`);
                novaOperacao();
            }

            function divisaoReal() {
                resultado = n1 / n2;
                alert(`${n1} / ${n2} = ${resultado}`);
                novaOperacao();
            }

            function divisaoInteira() {
                resultado = n1 % n2;
                alert(`O resto da vivisao entre ${n1} e ${n2} é ${resultado}`);
                novaOperacao();
            }

            function potenciacao() {
                resultado = n1 ** n2;
                alert(`${n1} ** ${n2} = ${resultado}`);
                novaOperacao();
            }


            // Nova operacao
            function novaOperacao() {
                let opcao = prompt("Deseja realizar uma nova operacao?\n 1 - Sim \n 2 - Nao");

                if (opcao == 1) {
                    calculadora();
                } else if (opcao == 2) {
                    alert("Ate mais!");
                } else {
                    alert("Digite uma opcao valida!");
                    novaOperacao();
                }

            }
        }



        // condicional menu opecoes
        if (operacao == 1) {
            soma();
        } else if (operacao == 2) {
            subtracao();
        } else if (operacao == 3) {
            multiplicacao();
        } else if (operacao == 4) {
            divisaoReal();
        } else if (operacao == 5) {
            divisaoInteira();
        } else if (operacao == 6) {
            potenciacao();
        }

    }
}

// Chama function calculadora
calculadora();