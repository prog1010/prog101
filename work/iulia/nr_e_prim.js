// check a numebr is prime 


var i = 2;
var n=13;
var prime = true;
var half = n/2;


// while ((i<=half) && (prime === true)){
//    while (n%i === 0){
//       prime = false;
//       console.log (half*2 + " nu e prim, se imparte la " + i + " ")
//       n= n/i;
//    }
//     i=i+1; 
// }
// if (prime === true) console.log (half*2 + " e prim")


// for (i=2; i<=half; i++){
// 	  while (n%i === 0){
//       prime = false;
//       console.log (half*2 + " nu e prim, se imparte la " + i + " ")
//       n= n/i;
//    }
// }

// if (prime === true) console.log (half*2 + " e prim") 

for (i=2; i<=half; i++){
	for (; n % i === 0; n = n/i){
     console.log (i)
     prime = false
	}
}

if (prime === true) console.log (half*2 + " e prim")  