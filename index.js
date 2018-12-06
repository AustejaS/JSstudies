let pirmaReiksme;
let antraReiksme;
let suma;
let atimtis;
let dalyba;
let daugyba;
let liekana;


document.getElementById("calcul").addEventListener("click", function( event ) {

  console.log(event.target.value);
  
  switch (event.target.value) {
    case "Sum":
      suma=pirmaReiksme+antraReiksme;
      document.getElementById("ats").innerHTML=suma;
      console.log(`I will sum: ${suma}`);
      break;
    case "Subtract":
      atimtis=pirmaReiksme-antraReiksme;
      document.getElementById("ats").innerHTML=atimtis;
      console.log(`i will subtract ${atimtis}`);
      break;
    case "Divide":
      dalyba=pirmaReiksme/antraReiksme;
      document.getElementById("ats").innerHTML=dalyba;
      console.log(`i will divide ${dalyba}`);
      break;
    case "Multiply":
      daugyba=pirmaReiksme*antraReiksme;
      document.getElementById("ats").innerHTML=daugyba;
      console.log(`i will multiply ${daugyba}`);
      break;
    case "Modus":
      liekana=pirmaReiksme%antraReiksme;
      document.getElementById("ats").innerHTML=liekana;
      console.log(`i will mod ${liekana}`);
      break;
    case "Clear":
      console.log("trinu");
      pirmaReiksme='';
      antraReiksme='';
      document.getElementById("pirmasSk").value='';
      document.getElementById("antrasSk").value='';
      document.getElementById("ats").innerHTML='';
      break;
    default:
  }
  }, false);

document.getElementById("pirmasSk").addEventListener("input", function(event){

  pirmaReiksme=event.target.valueAsNumber;

},false);


document.getElementById("antrasSk").addEventListener("input", function(event){

  antraReiksme=event.target.valueAsNumber;

},false);
