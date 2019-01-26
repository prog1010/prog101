
function compare (numar){
	var u = numar%10;
	while (numar != 0) {
		if (u != numar % 10) {
		console.log("cifrele nu sunt egale");
		break;
		}
		else {
		numar = (numar - u) / 10;
		}
	}
	return numar;	
}



if (compare((6667)) ==0) {
	console.log("cifrele sunt egale");
}

