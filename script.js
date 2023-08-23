// 1
let carro = 'Fusca';
alert(carro);

//2
let nome = prompt('Qual é o seu nome?');
alert('Olá, ' + nome + '!');

//3
let idade = prompt('Qual é a sua idade?');
alert('Olá, ' + nome + ', Sua idade é ' + idade + ' anos.');

//4

let base = prompt("Digite o valor da base")
let altura = prompt("Digite o valor da altura")
let lado = prompt("Digite o valor do lado")
let diagonalMaior = prompt("Digite o valor da diagonal maior")
let diagonalMenor = prompt("Digite o valor da diagonal menor")
let baseMaior = prompt("Digite o valor da base maior")
let baseMenor = prompt("Digite o valor da base menor")
let raio = prompt("Digite o raio")

const retangulo = base * altura
alert("A área do retângulo é: " + retangulo)

const quadrado = lado * lado
alert("A área do quadrado é: " + quadrado)

const losangulo = (diagonalMaior * diagonalMenor)/ 2
alert("A área do losangulo é: " + losangulo)

const trapezio = (baseMaior + baseMenor) * altura / 2
alert("A área do trapézio é: " + trapezio)

const paralelogramo =base * altura
alert("A área do parelelogramo é: " + paralelogramo)

const triangulo = (base * altura)/2
alert("A área do triângulo é: " + triangulo)

const circulo = 3.14 * (raio * raio)
alert("A área do circulo é: " + circulo)