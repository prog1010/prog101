var height =7;

for (var i=1; i<=height; i++){
	var rand = "";
	for (var j=1; j<height-i+1; j++){
		 rand = rand + " "
		
	}
	for (var j=1; j<=(2*i-1); j++){
		 rand = rand + "*"

	}
	console.log(rand);
}