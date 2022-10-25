//exercicio2

//a

function funcaoSoma (a , b) {
    let somaResultados = a + b
    console.log("A soma dos resultados é")
    console.log(somaResultados)
}

funcaoSoma(10, 24)

//b

function numeroMaiorOuIgual (a , b) {
    let maiorOuIgual = a >= b
    console.log("A condição é verdadeira?")
    console.log(maiorOuIgual)
    
}

numeroMaiorOuIgual(10, 7)

//c

function parOuImpar (a) {
    let numero = a % 2 ===0
    console.log("É par ou impar?")
    console.log(numero)
    
}

parOuImpar(9)

//d

function descontoSalario (a) {
    let salario = a
    const descontoINSS = a - (a*0.10)
    console.log(`O salário é ${a} menos 10% é igual a ${descontoINSS}`)
    console.log(descontoINSS)
}

descontoSalario(1212)