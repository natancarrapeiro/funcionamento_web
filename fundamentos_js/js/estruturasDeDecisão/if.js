/*
A if...elseinstrução executa uma instrução se uma condição especificada for verdadeira . Se a condição for falsa , outra instrução na else cláusula opcional será executada.
è mais usada para saber se uma condição é ou nao verdadeira e com a condição true/false dar os comandos de execusão

*/
var a = 10;
var b = 3;

console.log ("if com uma única condição:");
if (a > b){
    console.log("a é maior que b");
}
if (a == b){
   console.log("a é igual a b"); 
}
if (a < b){
    console.log("a é menor que b");
}
if (b < a){
	console.log("b é menor que a");
}
console.log ("if com duas condição:");
var idade=22
var carteiraMotorista=true
if (idade>18 & carteiraMotorista ==true ) {
    console.log("você pode dirigir")
    console.log("você tem mais de 18 e possui carteira de motorista")
} else {
    console.log("Voce não pode dirigir sem ter 18 anos e sem cateira")
    
}

