// Tipos primitivos

// Boolean
var vOuF = false;
console.log(typeof(vOuF));

// number
var numeroQualquer = 1;
console.log(typeof(numeroQualquer));

// string
var nome = "Miqueias Andrade";
console.log(typeof(nome));

var variavel; // var usa-se no escopo global
console.log(variavel); // variavel undefined


// let permite a alteracao do seu valor
let variavel2 = "Miqueias";
console.log(variavel2);
variavel2 = "Miqueias Andrade";
console.log(variavel2);

// constant
const constante = "Miqueias";
console.log(constante);


// escopo local e Global
var escopoGlobal = "Global";
console.log(escopoGlobal);

function escopoLocal() {
    let  escopoLocalInterno = "Local";
    console.log(escopoLocalInterno);
}

escopoLocal();

// Compracao

var valor = "0" == 0;
console.log(valor);

var valor2 = "0" === 0;
console.log(valor2);


// operadores

// % resto da divisao
// ** potenciacao

// && -> e

// || -> ou

// ! -> nao - inverte os valores


// document.getElementById("demo").innerHTML = vOuF;

