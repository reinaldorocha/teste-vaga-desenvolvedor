var sortear = function(totalNumeros) {
    const intervalo = 100;
    const intervaloArray = [...Array(intervalo).keys()];
    const numeros = [];            

    for (let i = 0; i < totalNumeros; i++) {
      const index = Math.floor(Math.random() * intervaloArray.length);
      numeros.push(+intervaloArray.splice(index, 1) + 1);
      if (numeros.includes(33) == true) {
        document.getElementById("total").value = "Existe ganhador (33)";                        
        break;
      }
      else
        document.getElementById("total").value = "Não há ganhador";
    }
    document.getElementById("numerosSorteados").value = numeros;    
}