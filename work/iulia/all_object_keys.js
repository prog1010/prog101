
function all_object_keys(obiect){
 // console.log(Object.keys(obiect));
// sau 

  for (var k in obiect) {
  	console.log(k);
  	if (typeof obiect[k] === "object" )
  		all_object_keys(obiect[k])
  }

}


all_object_keys ({
	type: {
		prop1: 1,
		prop2: 2
	}, 
	model: 3, 
	color: 'blue'
});