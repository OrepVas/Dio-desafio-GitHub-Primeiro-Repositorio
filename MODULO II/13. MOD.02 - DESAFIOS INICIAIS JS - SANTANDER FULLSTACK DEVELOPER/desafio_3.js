// A função gets() é implementada dentro do sistema para ler as entradas(inputs) dos dados e a função print() para imprimir a saída (output) de dados e já pula uma linha ("\n")
// Abaixo segue um exemplo de código que você pode ou não utilizar
let lines = gets().split("\n");//Split - Separa as variaveis
let t = 5;
let line = lines.shift().split(' ');//Shift - remove o primeiro elemento
let soma = 0;

//TODO: Complete os espaços em branco com uma possível solução para o desafio

for(i=1;i<t;i++){
  soma = soma + parseInt(line.slice(-i));//parseInt - Analisa um argumento string e retornaum inteiro na especificada
  //Slice - Extrai uma parte de uma string e a retorna como uma nova string, sem modificar a string original
  
}
soma = (soma-3);

console.log(soma); //Imprime os dados