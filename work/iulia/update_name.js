var nume = "   iulia  andra ";
var corect = ""
var space = true;


for (var i=0; i<nume.length; i++) {
	if (nume[i] === " ") {
		if (space === false){
			space = true;
		corect = corect + nume[i];
		}
	}
	else{
		if (space === true) {
			corect = corect + nume[i].toUpperCase()
			space = false;
		}
		else 
			corect = corect + nume[i];
	}
		

}
console.log(corect)	 