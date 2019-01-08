var accesorii = ["cercei", "bratari", "margele", "lantisoare", "brose", "inele", "pandative"]


function elemente (cate){
var selectie = [];
var x = cate;
for (var i=0; i<x; i++){
	selectie = selectie +" "+ accesorii[i]
	
}	
return selectie;
}

console.log (elemente(3));