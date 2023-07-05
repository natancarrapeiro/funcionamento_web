        //A instrução var declara variáveis ​​com escopo de função ou com escopo global, opcionalmente inicializando cada uma com um valor.        
   
        var x = 1;

        if (x === 1) {
          var x = 2;
        
          console.log(x);
          // Expected output: 2
        }
        
        console.log(x);
        // Expected output: 2

        //A declaração let declara variáveis ​​locais reatribuíveis com escopo de bloco, opcionalmente inicializando cada uma com um valor.
        let y = 1;

        if (y === 1) {
          let y = 2;
        
          console.log(y);
          // Expected output: 2
        }
        
        console.log(y);
        // Expected output: 1 
        
        
        
        
       
