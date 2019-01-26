// sa se afiseze termenul al K-lea fibonacci, T= (Tn-1) + (Tn-2)

var t1=t2=1;
var temp=1;
var n= 1;

	for (var i=3; i<=n; i++) {
		temp = t1 + t2;
		t1=t2;
		t2=temp; 	
	}
console.log (temp)		

