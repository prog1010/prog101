var f = 60;
var c = (f-32) * 5/9;
console.log(c);


var weight = 60;
var height = 170;
var heightM = height / 100;
var bmi = weight / (heightM*heightM);
console.log(bmi);


var x = 21;
if (x%3 == 0){
	console.log("Numarul se imparte la 3");
}
else {
	console.log("Numarul nu se imparte la 3")
}
if (x%7 == 0){
	console.log("Numarul se imparte la 7");
}
else {
	console.log("Numarul nu se imparte la 7")
}

var age = 18;
if (age<18){
	console.log("Persoana este minora");
}
else {
	console.log("Persoana este majora");
}


var place = "New York" ;
console.log(place + ", " + place);

var x = 123
var counter = 0

while (x > 1) {
	x = x / 10;
	counter = counter + 1;
}
console.log(counter)


var x = 123;
var y = 0;

while(x >= 1){
	r = x%10;
	x = Math.trunc(x / 10);
	y = y * 10 + r;
}

console.log(y);

var xFirst = 121;
var y = 0;
var x = xFirst

while(x >= 1){
	r = x%10;
	x = Math.trunc(x / 10);
	y = y * 10 + r;
}
if (xFirst == y) {
	console.log("Numarul este palindrom")
}
else {
	console.log("Numarul nu este palindrom")
}
