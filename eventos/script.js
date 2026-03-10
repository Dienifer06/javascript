// const btn = document.querySelector('button');
// so o primeiro 
// all todos 

// function random(number){ // NUMERO aleatorio
//     return Math.floor(Math.random() * (number + 1)); 
// }

// function btChange(e){
//     let color = 
//     "rgb(" + random(255) + "," + random(255) + "," + random(255) + ")";
    
//     // e.target.style.backgroundColor = color;
//     document.body.style.background = color;
//     console.log(e);
// }

// btn.addEventListener("click", btChange); //escutador






/* *******************************************************************************************************/
// exercicios 
// 1 - contador 
//     um botão que some(+) toda vez que é clicado 


// let contador = 0;

// // 2. Seleciona os elementos
// const num = document.getElementById('valor');
// const botao = document.getElementById('btnContador');

// // 3. Adiciona a função de clique
// botao.addEventListener('click', () => {
//   contador++; // contador++: O JavaScript vai na "caixinha" do contador e soma +1 ao valor que estava lá. Se era 0, vira 1. Se era 10, vira 11.
//   num.innerText = contador; // Atualiza a tela
// });

/* *******************************************************************************************************/
// O JavaScript pega esse novo número e "escreve" ele dentro do elemento na tela. Sem essa linha, o computador saberia que o número mudou, mas você continuaria vendo o número antigo na página.
// () => { ... } se chama Arrow Function (ou "Função de Seta", em tradução livre). Ela foi introduzida no JavaScript moderno (ES6) para deixar o código mais curto, limpo e resolver alguns probleminhas chatos de escopo.
// 2. Anatomia da Seta
// (): É onde ficam os parâmetros (os dados que a função recebe). Se não tiver nenhum, fica vazio. Se tiver apenas um, você pode até tirar os parênteses!

// =>: É a "seta" que separa a entrada (parâmetros) da ação (o que a função faz).

// { }: É o "corpo" da função, onde você coloca as linhas de código.

// 2. Por que o nome "Arrow" (Seta)?
// O símbolo => parece uma flecha apontando para o que deve ser feito.

// (): Aqui entram os ingredientes (parâmetros).

// =>: Significa "então faça isso".

// {}: É a cozinha onde a mágica acontece.

// Exemplo real no seu botão:
// botao.onclick = () => { alert("Oi!"); };

// Traduzindo para o humano: "Quando clicar no botão, pegue nada () e então => mostre um alerta { alert }."

/* *******************************************************************************************************/
// 2 - mini card 
//     uma Imagem, nome, algum texto 
//     um botão para mudar o fundo so do card.  

    // const botao = document.querySelector("button"); 
    // const card = document.getElementById("card");

    // botao.addEventListener("click", function(e) {

    //     function random(numero) {
    //         return Math.floor(Math.random() * numero);
    //     }

    //     let color = 
    //         "rgb(" + random(255) + "," + random(255) + "," + random(255) + ")";

    //     card.style.backgroundColor = color; //estou pegnado meu id,style,para mudar de cor o fundo 
//     // });
/* *******************************************************************************************************/

// A função random(255) faz o seguinte:

// Math.random(): Gera um número quebrado entre 0 e 1 (ex: 0.543).

// * numero: Multiplica por 255.

// Math.floor(): Arredonda para baixo para termos um número inteiro (ex: 138).

//card.style.backgroundColor: Essa é a linha de ação. O JavaScript acessa o CSS do seu elemento (através do .style) e altera a propriedade backgroundColor para a cor que acabamos de sortear.



/* *******************************************************************************************************/
// 3 - mostrar texto 
//     criar barra de texto 
//     conforme os usuraios escreva os texto apareça embaixo em um hx 


  function atualizarTexto() {
            // Pega o valor do input e coloca no h2
            var entrada = document.getElementById('entrada').value;
            document.getElementById('saida').innerText = entrada;
        }


/* *******************************************************************************************************/

    

