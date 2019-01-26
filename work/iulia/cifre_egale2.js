
function compare (str){
	for(i=1; i<str.length; i++) {
		if (str[i] != str[0])
			return false;
	}
	return true;	
}


if (compare("2252"))
	console.log("sunt egale")
else
	console.log("nu sunt egale")