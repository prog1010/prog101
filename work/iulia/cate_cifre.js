var number = 1000;
var j =1;
var nu_cifre= 0;
initial_number = number;

while (number != 0){
  j = j*10;
  number = number - (number%j);
  nu_cifre++;
  
}

console.log000000000(initial_number+ " ->" + nu_cifre);

if (initial_number === 0) nu_cifre=1;

  number % 3 ===0