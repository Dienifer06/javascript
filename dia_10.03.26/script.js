// var a = 1;
// let b = 2;
// const c = 3;

// console.log(a +1);
// console.log(b + 1);
// console.log(c + 1);

//alert("dienifer fofa"); 

/*const nome = prompt("qual seu nome?")
console.log(nome); */


//console.log(confirm("você é real?"))


//execicios

/*const nome = prompt("qual é seu nome?")
console.log ("ola" + nome);*/  

/*let materia = prompt("Qual sua disciplina favorita?");
alert(materia);
console.log(`A matéria ${materia} é muito boa`);*/



/*const data = prompt("qual a data de hoje?")
console.log(data);*/

/*console.log(confirm("Está preparado para segundo semestre de desenvovimenro de sistema?"))*/



// a = 3;

// console.log(a++)
// console.log(a--)

// 4 > 3 && 5 > 6


/*const num1 = Number(prompt("Insira um número:"));
const num2 = Number(prompt("Insira outro número:"));
alert(`A soma é: ${num1 + num2}`);
alert(`A multiplicação é: ${num1 * num2}`)
alert(`A subtração é: ${num1 - num2}`)
alert(`A divisão é: ${num1 / num2}`)*/


/*const nota1 = Number(prompt("Insira uma nota:"));
const nota2 = Number(prompt("Insira outra nota:"));
const nota3 = Number(prompt("Insira mais uma nota:"));

const media = (nota1 + nota2 + nota3) / 3;

alert(`A média das suas notas é: ${media}`);*/


/*const largura = Number(prompt("qual a largura:"));
const altura = Number(prompt("qual a altura:"));

const area = (largura * altura)
const litros = (area/2)

console.log(`Área: ${area}, Litros: ${litros}`);*/

/*if e else 

let maior =  18
if (maior > 19 )console.log("maior!")
else console.log("menor!")

let cor = prompt("cor favorita");



switch(cor){
    case "preto":
        console.log("você é a koromi")
        break;
    case "roxo":
        console.log("você é my melody")
        break;
    case "branco":
        console.log("você é my chinamonroll")
        break;
    case "pink":
        console.log("você é my hellokitte")
        break;
    case "azul":
        console.log("você é luxo")
        break;
    case "verde":
        console.log("você é o  keroppi")
        break;
    case "amarelo":
        console.log("você é o  keroppi")
        break;
}
*/


// let isBirthday = true;
// let helou = isBirthday ? "feliz aniversario koromi" : " Bom dia koromi";

// console.log(helou)

// for

// let cats = ["koromi","kitty","porim","roll","Retsuko"]
// let info = "my cats are called"

// for (let i = 0; i < cats.length ; i++){
//     info += cats [i] + " , ";
// }

// console.log(info)



// // while

// let cats = ["koromi","kitty","porim","roll","Retsuko"]
// let info = "my cats are called"
// let i = 0

// while ( i < cats.length){
//     if (i === cats.length-1){ // os 3 === verifica todos os itens
//         info+= "and" + cats[1] + "."; 
//     }else{
//         info += cats[i] + ",";
//     }
//    i++

// console.log(info);

// //função 

// function soma(n1,n2){
//     return n1 + n2;
// }

// console.log(soma(3,4))


// let som = function(n1,n2){
//     return n1 + n2
// }
// console.log(som(3,4)) //função anonima


// let som = (n1, n2) => {
//     return n1 + n2
// }

// console.log(som(6,8))





////////////////////// EXERCICIO 1 ///////////////////////////

// let num = Number(prompt("Insira um numero:"));
// if (num % 2 === 0) {
//     console.log("O número é par");
// } else {
//     console.log("O número é ímpar");
// }

// let num1 = Number(prompt("Insira um numero:"));
// if (num1 % 3 === 0) {
//     console.log("O número é multílico de 3");
// } else {
//     console.log("O número é multílico de 3");
// }

// let num2 = Number(prompt("Insira um numero:"));
// if (num2 % 5 === 0) {
//     console.log("O número é multílico de 5");
// } else {
//     console.log("O número é multílico de 5");
// }


////////////////////////// EXERCICIO 2 /////////////////////////

// prompt(): Abre uma caixa de diálogo para o usuário digitar.
// parseFloat(): Converte a entrada de texto (string) do usuário em um número de ponto flutuante.
// Math.max(n1, n2, n3): Uma função nativa do JavaScript que compara os números fornecidos e retorna o maior.
// isNaN(): Verifica se o usuário digitou algo que não é um número (Not-a-Number).
// alert(): Exibe o resultado em uma janela pop-u

// let num1 = Number(prompt("Insira um numero:"));
// let num2 = Number(prompt("Insira um numero:"));
// let num3 = Number(prompt("Insira um numero:"));

// // 2. Verificar se a entrada é um número válido
// if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
//     console.log("Por favor, digite apenas números válidos.");
// } else {
//     // 3. Encontrar o maior número
//     // A função Math.max compara os valores e retorna o maior
//     let maior = Math.max(num1, num2, num3); 
//         alert("O maior número é: " + maior);
//     console.log("Os números digitados foram: " + num1 + ", " + num2 + ", " + num3);
//     console.log("O maior número é: " + maior);
// }

// // versão 2
// let num1 = parseFloat(prompt("Número 1:"));
// let num2 = parseFloat(prompt("Número 2:"));
// let num3 = parseFloat(prompt("Número 3:"));

// let maior;

// if (num1 >= num2 && num1 >= num3) {
//     maior = num1;
// } else if (num2 >= num1 && num2 >= num3) {
//     maior = num2;
// } else {
//     maior = num3;
// }

// alert("O maior número é: " + maior);


//////////////////////////////// EXERCICIO 3 ///////////////////////////////////
// if (let celsius = prompt("Digite a temperatura em Celsius:");
//     let fahrenheit = (parseFloat(celsius) * 9/5) + 32;{

//     }


// alert(celsius + "°C é igual a " + fahrenheit + "°F");
// console.log(`${celsius}°C é igual a ${fahrenheit}°F`);

// (parseFloat(far)-32)* 5/9



// let escolha = prompt("Digite 'fahrenheit' para converter de Fahrenheit para Celsius\nDigite 'celsius' para converter de Celsius para Fahrenheit");

// if (escolha === "fahrenheit") {
//     // Conversão Fahrenheit para Celsius
//     let fahrenheit = prompt("Digite a temperatura em Fahrenheit:");
//     if (fahrenheit !== null) {
//         let celsius = (parseFloat(fahrenheit) - 32) * 5/9;
//         alert(fahrenheit + "°F é igual a " + celsius.toFixed(2) + "°C");
//     }
// } else if (escolha === "celsius") {
//     // Conversão Celsius para Fahrenheit
//     let celsius = prompt("Digite a temperatura em Celsius:");
//     if (celsius !== null) {
//         let fahrenheit = (parseFloat(celsius) * 9/5) + 32;
//         alert(celsius + "°C é igual a " + fahrenheit.toFixed(2) + "°F");
//     }
// } else {
//     alert("Opção inválida.");
// }



///////////////////////////////// EXERCICIO 5 /////////////////////////////////////////

// let velocidade = Number(prompt("Qual velocidade do seu carro?"));

// if (velocidade > 80) {
//     // Calcula o valor da multa (R$ 5 por km acima de 80)
//     let multa = (velocidade - 80) * 5;
//     alert(`Você foi multado! Sua velocidade foi de ${velocidade} km/h.\nO valor da multa é R$ ${multa.toFixed(2)}.`);
// } else {
//     alert("Velocidade dentro do permitido. Sucesso!");
// }


//////////////////////////////EXERCICIO ////////////////////////////////////

let distancia = Number(prompt("Qual distância você deseja percorrer?"));
if (distancia)