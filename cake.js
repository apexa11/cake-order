	var Form=document.forms["cakeform"];
 	var i;

 	var cake_Size=new Array();
 	cake_Size["roundcake6"]=20;
 	cake_Size["roundcake8"]=25;
 	cake_Size["roundcake10"]=35;
 	cake_Size["roundcake12"]=75;

 	var filling_price=new Array();
 	filling_price["none"]=0;
 	filling_price["pineple flavour"]=5;
 	filling_price["chocolate flavour"]=7;
 	filling_price["choco flavour"]=7;
 	filling_price["cookies & cream flavour"]=5;

//finding price of cake bas on size
 function CakeSizePrice(){
 	var cakesizePrice=0;
 	var Form=document.forms["cakeform"];
 	var cakeselection=Form.elements['sizeofcake'];
 	for(var i=0;i<cakeselection.length;i++){
 		if(cakeselection[i].checked)
 	{
 		cakesizePrice=cake_Size[cakeselection[i].value];
 		break;
 	}
}

 	return cakesizePrice;
}



//finding price of cake bas on size
 function FilingPrice(){
 	var fillingPrice=0;
 	var Form=document.forms["cakeform"];
 	var fillingselect=Form.elements["Filling"];
 	fillingPrice=filling_price[fillingselect.value];
 	return fillingPrice;
}

//for include candles

function CandlePrice(){
	var candleprice=0;
	var Form=document.forms["cakeform"];
	var candleSlection=Form.elements["candles"];
	if(candleSlection.checked==true){
		candleprice=5;
	}
	return candleprice;
}

function InscriptionPrice(){
	var inscriptionprice=0;
	var Form=document.forms["cakeform"];
	var inscriptionSlection=Form.elements["inscription"];
	if(inscriptionSlection.checked==true){
		inscriptionprice=20;
	}
	return inscriptionprice;
}


//final total amount of cake

function total(){
	var TotalPrice=CakeSizePrice() +FilingPrice()+ CandlePrice()+InscriptionPrice() ;

	//final result
	document.getElementById("display").innerHTML="total price $"+TotalPrice;
}
