var s = "abbab" ;
lung=s.length-1;
var i=0;
var palindrom = true;


	while (i<=lung/2+1){
		if (s[i] != s[lung-i]){
			palindrom = false;	
		}		 			
		i++   
	}
	if (palindrom == true)
		console.log ("este palindrom")
	else
		console.log("nu e palindrom")

