/*Escreva um programa contendo uma Collection Queue (Fila) de Objetos do tipo string, para organizar uma fila por ordem de chegada 
dos Clientes de um Banco.
O programa deverá ter um Menu que aceitará as opções 0, 1, 2 e 3:
1: Adicionar um novo Cliente na fila. Deve solicitar o nome do Cliente.
2: Listar todos os Clientes na fila
3: Chamar (retirar) uma pessoa da fila 
0: O programa deve ser finalizado. 
Caso a fila esteja vazia, o programa deverá informar que a fila está vazia ao tentar retirar (chamar) um cliente da fila.
*/

import ler = require("readline-sync");

import { Queue } from "../queueMetodos";

const fila = new Queue<string>();

let continua: string = "s";

do {
  console.log("***** MENU *****");
  console.log("***** Digite 1 \nCadastrar usuario *****");
  console.log("***** Digite 2 \nLista de usuario *****");
  console.log("***** Digite 3 \nRetirar da fila ******");
  console.log("***** Digite 0 \nAtendimento finalizado *****");

  let opcao = ler.questionInt(" -> ");

  switch (opcao) {
    case 1:
        console.clear();
      fila.enqueue(ler.question("Cliente: "));
      break;

    case 2:
        console.clear();
      fila.printQueue();

      break;

    case 3:
        console.clear();
      fila.dequeue();

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
