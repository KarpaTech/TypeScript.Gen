/*Escreva um programa contendo uma Collection Stack (Pilha) de Objetos string, para organizar a retirada de livros de uma pilha. 
O programa deverá ter um Menu que aceitará as opções 0, 1, 2 e 3:
1: Adicionar um novo livro na pilha. Deve solicitar o nome do livro.
2: Listar todos os livros da Pilha
3: Retirar um livro da pilha 
0: O programa deve ser finalizado. 
Caso a pilha esteja vazia, ao tentar retirar um livro da pilha, o programa deverá informar que a pilha está vazia.
*/

import ler = require("readline-sync");

import { Stack } from "./stackMet";

const fila = new Stack<string>();

let continua: string = "s";

do {
  console.log("***** MENU *****");
  console.log("***** Digite 1  *****\nAdicionar um novo livro na pratileira");
  console.log("***** Digite 2 *****\nLista todos os livros na pratileira ");
  console.log("***** Digite 3  ******\nRetirar da pratileira");
  console.log("***** Digite 0 *****\nFinalizar a busca ");

  let opcao = ler.questionInt(" -> ");

  switch (opcao) {
    case 1:
      console.clear();
      fila.push(ler.question("Título do livro: "));
      break;

    case 2:
      console.clear();
      fila.printStack();

      break;

    case 3:
      console.clear();
      fila.pop();
      fila.printStack();

      break;

    case 0:
      console.clear();
      continua = "stop";

      break;
    default:
      console.clear();
      console.log("Opção inválida!");
      break;
  }
} while (continua === "s");
