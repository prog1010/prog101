var no = -6565;
var sum =0;
var y=10;

while (no != 0){
     sum = sum + no%y
     no = (no - no%10)/10
 
}

console.log("suma cifrelor este ", sum)