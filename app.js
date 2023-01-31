function storeValue() {
    var inputValue = parseFloat(document.getElementById("input1").value);
    console.log("Valor do input: " + inputValue);
  
    var dollarValue = 5.32;
    var euroValue = 5.55;
    var bitcoinValue = 116841.00
  
    var dollarResult = inputValue / dollarValue;
    console.log("Valor dólar: " + dollarResult.toFixed(2));
  
    var euroResult = inputValue / euroValue;
    console.log("Valor euro: " + euroResult.toFixed(2));
  
    var bitcoinResult = inputValue / bitcoinValue;
    console.log("Valor Bitcoin: " + bitcoinResult.toFixed(8));
  
    document.getElementById("ResultadoDollar").innerHTML = dollarResult.toFixed(2);
    document.getElementById("ResultadoEuro").innerHTML = euroResult.toFixed(2);
    document.getElementById("ResultadoBitcoin").innerHTML = bitcoinResult.toFixed(8);
  }
