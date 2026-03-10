let lista1 = ["João", "Kaique", "Thomas", "Gabi", "Rayane", "Julias"]
let lista2 = [1,2,3,4,5,6,7,8,9,10,20,30,40,50,60,70,80,90,100];
 
// for (let indice in lista1){
//     console.log(indice) // ver indice da lista
//     // console.log(lista1[indice]); // ver os proprios nomes
// }
 
// for (let item of lista1){
//     console.log(item) // aparece os valores da lista
// }
 
// let frase = "Meus alunos: "; // cria a frase
 
// lista1.forEach(function(item){
//     frase += item + ", "
// });
// console.log(frase);
 
 
// lista1.forEach((item)=>{ // air function
//     frase += item + ", ";
// });
// console.log(frase);
 
// lista1[6] = "dienifer"
// console.log(lista1) // diretamente colocando na lista, mas menos usado (generico)
 
// lista1.push("dienifer"); // fim da lista
 
// lista1.unshift("Nicolas"); // começo da lista
 
// console.log(lista1)
 
// lista1.pop(); // retira o ultimo nome
 
// let a = lista1.pop() // maneira de colocar na lista o nom que ira sair
// console.log(lista1)
 
 
// lista1.shift() // retira primeiro nome
 
// let b = lista1.shift() // coloca o nome que retiraste da lista na variavel
 
// console.log(lista1)
 
// console.log(lista1);
// lista1.slice(3,4);
// console.log(lista1)

// console.log(lista1);
// let a = lista1.slice(3,4);
// console.log(a)

// let lista3 = lista1;
// lista3 = lista1.slice();


// let b = lista2.map(function(n){
//     return n*2;
// })


// let b = lista2.map((n) => {
//     return n*2;
// })

//   console.log(b)


// let b = lista2.map(n => n*2)


// console.log(b)


// let c = lista2.filter(function(n){
//     return n % 2 === 0;
// })

// console.log(c)


// let [a1 ,a2 ,a3] = lista1;

// console.log(a1, a2 ,a3);

// let [a1 ,a2 ,a3] = lista1[3];

// console.log(a1, a2 ,a3);


// let 1 =  lista1 + lista2;

// console.log(1)


// ************************************************************ 1 
// Desenvolva um programa que a partir de um vetor 
// de inteiros com 5 valores inicializados na declaração 
// apresente o dobro de cada valor armazenado.


// let lista = [1, 2, 3, 4, 5];
// let listas = lista.map(n => n * 2);
// console.log(listas); 


//////////////////////////////////////////////////////////////// 2 
// Desenvolva um programa que a partir de um vetor de inteiros com 8 
// valores inicializados na declaração apresente a média aritméticas desses valores.

// let lista = [1, 2, 3, 4, 5, 6, 7, 8];

// let soma = 0;
// let contador = 0;
// for (let numero of lista) {
//   soma += numero; 
//   contador++;     
// }
// let media = soma / contador;
// console.log("Soma:", soma);  
// console.log("Média:", media);

////////////////////////////////////////////////////////////////////////////////////3
// Desenvolva um programa que leia a idade de 20 pessoas e apresente as idades acima da média.

// let lista_idade = [5, 8, 9, 10, 22, 40, 30, 35, 41, 45, 50, 20, 22, 25, 23, 29, 35, 45];

// let soma = 0;
// let contador = 0;

// for (let numero of lista_idade) {
//   soma += numero; 
//   contador++;     
// }

// let media = soma / contador;


// let idadesAcima = []; 

// for (let idade of lista_idade) {
//   if (idade > media) {
//     idadesAcima.push(idade); // Se for maior, joga dentro da lista 'idadesAcima'
//   }
// }

// Visualizando os resultados
// console.log("Soma total:", soma);
// console.log("Total de pessoas:", contador);
// console.log("Média de idade:", media.toFixed(2)); // .toFixed(2) deixa com 2 casas decimais
// console.log("Idades acima da média:", idadesAcima);


////////////////////////////////////////////////////////////////// 4

