console.log("usando while")
var contador = 1;
// while  é uma estrutura que funciona enquanto for verdadeira a explesão 
//tenha cuidado com loop infinito
while (contador < 11){
    console.log(contador);
    contador++;
}
console.log("usando do/while")

//do/while
//ele executa pelo menos uma vez e depois ele verifica sua condisão
var idade = 100;
do{
    console.log(idade);
    idade -= 1;
} while (idade>89);