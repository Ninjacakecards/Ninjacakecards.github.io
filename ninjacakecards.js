function calculateValue(){
  var ebayInput = document.getElementById("ebayPrice").value;
  var CMInput = document.getElementById("CMPrice").value;

  /*FEES VARIABLES*/
  var ebayFees = 0.876;
  var CMFees = 0.95;
  /*FEES VARIABLES*/

  /*CALC VARIABLES*/
  var ebayCalc;
  var CMCalc;
  /*CALC VARIABLES*/

  /*CONVERSION RATE*/
  var convRate = 0.88;
  /*CONVERSION RATE*/

  /*POSTAGE AND OTHER FEEES*/
  var deductFromPrice;
  var paypalFlat = 0.20;
  var envelope = 0.04;
  var toploader = 0.04;

  var comboPrice = paypalFlat + envelope + toploader;

  var underTwenty = 0.50;
  var underFifty = 1.50;
  var overFifty = 5;
  /*POSTAGE AND OTHER FEES*/



  if(ebayInput < 20 && ebayInput > 0){
  deductFromPrice = comboPrice + underTwenty;
  }
  if(ebayInput >= 20 && ebayInput <= 50){
  deductFromPrice = comboPrice + underFifty;
  }
  if(ebayInput > 50){
  deductFromPrice = comboPrice + overFifty;
  }



  if(ebayInput == 0){
  document.getElementById("ebayOutput").innerHTML = "";
  }
  else{
  ebayCalc = (ebayFees * ebayInput) - deductFromPrice;
  ebayCalc = Math.floor(ebayCalc * 100) / 100;

  document.getElementById("ebayOutput").innerHTML = "£" + parseFloat(ebayCalc).toFixed(2);
  }



  if(CMInput == 0){
  document.getElementById("CMOutput").innerHTML = "";
  }
  else{
  CMCalc = ((CMInput * CMFees) * convRate) - (envelope + toploader);
  CMCalc = Math.floor(CMCalc * 100) / 100;

  document.getElementById("CMOutput").innerHTML = "£" + parseFloat(CMCalc).toFixed(2);
  }



}

document.onkeydown = function (e) {
switch (e.keyCode) {
case 13:
    calculateValue();
    break;
default:
    return; // Do nothing for the rest
}
};