function alterar(){
    //encontrando o elemento entrando no html pelo seu ID e salvanbdo em variaveis 
    let objc=document.getElementById("c1"); 
    let objx=document.getElementById("x1");
    let objy=document.getElementById("y1");
    //extrair o valor do conteudo que obtido pelo js no arquivo html
    objc.style.left=`${objx.value}px`;
    objc.style.top=`${objy.value}px`;
    //inserindo o dado na pagina html
    objc.innerHTML=`( x ${objx.value}, y ${objy.value})`}