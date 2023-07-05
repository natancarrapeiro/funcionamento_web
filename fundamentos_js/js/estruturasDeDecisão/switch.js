
var cor= "vermelho"
function corVerde(){
    console.log("cor verde")
    console.log("pode continuar o seu caminho")
}
function corAmarela(){
    console.log("cor amarela ")
    console.log("atenção você vai precisar parar")
}
function corVermelha(){
    console.log("cor vermelha")
    console.log("voce tem que parar o veiculo")
}


switch(cor){//ele pega o que é pra ser comparado
    case "verde"://verifica se sele se encaixa em algum caso 
             corVerde()
             break;
    case "amarelo":
             corAmarela()
             break;
    case "vermelho":
            corVermelha()
            break;
   default://se ele nao encontrar nenhum dos caso ele da uma msg
   console.log("nao esatra entre as cores verde/amarela/vermelha por favor utilise uma delas")
}