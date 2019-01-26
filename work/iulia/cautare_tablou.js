var tablou = ["iulia", "ioana", "vali"]
var search = "iulia";

if ((position = tablou.indexOf(search)) != -1)
console.log("tabloul contine elementul " + search + " la pozitia " + position)
else
console.log("tablou nu contine elementul " + search)



for (var j=0; j<tablou.length; j++){
	if (tablou[j] === search){
		console.log("tavblou contine elementul "+ search + " la pozitia " + j)
	}
}