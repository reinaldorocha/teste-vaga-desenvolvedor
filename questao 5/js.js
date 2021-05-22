var contarVogais = function(palavra) {            
            var totalVogal = 0;
            var vogais = ['a', 'e', 'i', 'o', 'u','A', 'E', 'I', 'O', 'U'];
            var i;

            for (i = 0; i < palavra.length; i++ ) {
                if(vogais.indexOf(palavra[i]) != -1) {
                    totalVogal++;
                }
            }            
            document.getElementById("total").value = totalVogal;                 
        }