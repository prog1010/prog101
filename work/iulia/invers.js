var number = initial_number = 69196;
var invers =0;

var nu_cifre = 0;


//afisez inversul
if (number === 0) console.log (invers=0);
else{
	while (number != 0 ){
		invers = invers*10 + number%10;
		number = (number - number%10) / 10; 
		nu_cifre++;
	}

	console.log (invers);
}


// daca numarul de cifre  este impar atunci verific daca este palindrom fata de cifra din mijloc

  if ((initial_number === invers) && (nu_cifre%2 !=0))
	console.log ("numarul este palindrom fata de cifra din mijloc")
  else
  if ((initial_number === invers) && (nu_cifre%2 ===0))
	console.log ("numarul este palindrom")
  
