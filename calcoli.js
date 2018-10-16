//calcoli per la app su pitagora

function calcola(){
var altezza=document.forms.pitagora.altezza.valueAsNumber;
var base=document.forms.pitagora.base.valueAsNumber;
var tot1=(altezza*altezza);
var tot2=(base*base);
var totale=Math.sqrt(tot1+tot2);
document.getElementById('mostra').innerHTML="Ipotenusa = " + totale;
}

function annulla(){
	document.getElementById("mostra").innerHTML="";
}



































