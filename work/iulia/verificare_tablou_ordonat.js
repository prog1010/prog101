var tablou = [2,4,6,9,11,8];
var ordonat = true;

for (var i=1; i<tablou.length; i++){
	if (tablou[i-1]>tablou[i])
		ordonat =false;
}

if (ordonat)
		console.log("este ordonat")
else
		console.log("nu este ordonat")

