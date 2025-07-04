import { Stack } from "../stackMetodos";

const pilha = new Stack<string>();

pilha.push("Prato Branco");
pilha.push("Prato Azul");
pilha.push("Prato Amarelo");
pilha.push("Prato Verde");
pilha.push("Prato Preto");

pilha.printStack();

pilha.pop();

console.log("\nPrato Preto removido");

pilha.printStack();

pilha.push("Prato Dourado");

console.log("\nNovo elemento adicionado!");

pilha.printStack();

console.log("\nO elemento no topo da pilha é: " + pilha.peek());

console.log("\nO Prato Amarelo está da pilha? " + pilha.contains("Prato Amarelo"));

console.log("\nA quantidade de Pratos na pilha é: " + pilha.count());
