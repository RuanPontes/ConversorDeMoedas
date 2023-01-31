function storeValue() {
    var inputValue = document.getElementById("input1").value;
    console.log("Valor do input: " + inputValue);
    
    var dollarValue = 5.32;
    var euroValue = 5.55;
    var BitcoinValue = 116.900;
    
    var dollarResult = dollarValue * inputValue;
    console.log("Valor dólar: " + dollarResult);
    
    var euroResult = euroValue * inputValue;
    console.log("Valor euro: " + euroResult);

    var BitcoinResult = BitcoinValue * inputValue;
    console.log("Valor Bitcoin: " + BitcoinResult);
    
    document.getElementById("ResultadoDollar").innerHTML = dollarResult.toFixed(2);
    document.getElementById("ResultadoEuro").innerHTML = euroResult.toFixed(2);
    document.getElementById("ResultadoBitcoin").innerHTML = BitcoinResult.toFixed(3);
    
  }
  