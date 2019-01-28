function pluralize(number, word){
	if (number>1){
		return number + " " + word + "s"
	}
	else {
		return number + " " + word
	} 
}

var result = pluralize(5, "cat");
console.log(result);
result = pluralize(1, "cat");
console.log(result);
result = pluralize(7, "turtle");
console.log(result);


function internationalize(language){
	if (language == "ro"){
		return "Ananas";
	}
	if (language == "de"){
		return "Ananas"
	}
	if (language == "es"){
		return "Ananas"
	}
	if (language == "en"){
		return "Pineapple"
	}
	if (language == null){
		return "Pineapple"
	}
}
	var Language = internationalize()
	console.log(Language);


var Penguin = {
	name: "Ioana",
	origin: "Oradea",
	notes: "a penguin who migrated from Oradea to Timisoara.",

	sayHello: function(){
		console.log("Hello, I'm a penguin and my name is "+this.name+"! I'm from "+this.origin+"! More exactly, I'm "+this.notes+" ");
	}

}
Penguin.sayHello()
function makePenguins(name,origin,notes){
	return{
		name: name,
		origin: origin,
		notes: notes,
		sayHello: function(){
			console.log("Hello, I'm a penguin and my name is "+this.name+"! I'm from "+this.origin+"! More exactly, I'm "+this.notes+" ");
		}
	}
}
var Penguin1 = makePenguins("Vali","Timisoara", "a penguin who migrated from his parents house to his apartament.")
Penguin1.sayHello()

function longestString(x){
	var max = 0;
	var word = "";
	for (var i = 0; i < x.length; i++) {
		if (x[i].length > max) {
			max = x[i].length;
			word = x[i];
		}
	}
	return word;
}
var val = longestString(["that", "don't", "impress", "me", "much"])
console.log(val)
