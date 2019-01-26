var i = 2;
var n=11;
var prime = true;
var half = n/2;


while ((i<=half) && (prime === true)){
   while (n%i === 0){
      prime = false;
      console.log (n + " nu e prim, se imparte la " + i + " ")
      n= n/i;
   }
    i=i+1; 
}
if (prime === true) console.log (half*2 + " e prim")