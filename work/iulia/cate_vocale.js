var str = "iaaaulia";
var vowels = ["a","e","i","o","u"];
var count=0 ;


for (var i=0; i<str.length; i++){
		if (vowels.indexOf(str[i]) != -1) {
   			count++; 
   		} 
}
if (count === 0)
console.log("sirul nu contine vocale")
else
console.log("sirul are " + count + " vocale")
