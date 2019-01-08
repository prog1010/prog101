
function reverse_case (sir){
	var reverse_string = "";	
	for (var i=0; i<= sir.length; i++){
		if (sir.charAt(i) === sir.charAt(i).toLowerCase())
			reverse_string = reverse_string + sir.charAt(i).toUpperCase() ;
		else
			
			reverse_string = reverse_string + sir.charAt(i).toLowerCase() ;
	}

	return reverse_string
}

console.log (reverse_case(" t B n"));