function ReturnRectangular1(x, y, h, w){
	return {
		Ox : x,
		Oy : y,
		height : h,
		width : w,
		area : function(){
			return (this.h)*(this.w);
		}
	}		
}

 function createRectangleList(n,factory) {
 	var list = [];
 	for (var i=0; i<n; i++){
	 	list.push(factory(
	 		Math.floor(Math.random() * 100), 
	 		Math.floor(Math.random() * 100), 
			Math.floor(Math.random() * 100),
			Math.floor(Math.random() * 100) 
		))

 	}
 	return list;
 }

 // console.log(createRectangleList(3,ReturnRectangular1))

function ReturnRectangular2 (x, y, w, h){
	return {
	    start: {
	        x: x,
	        y: y
	    },
	    end: {
	        x: x + w,
	        y: y + h
	    },
	    area : function(){
			return (this.end.x-this.start.x)*(this.end.y-this.start.y);
		},
		perimeter: function(){
			return -( 2* ((this.end.x-this.start.x) + (this.end.y-this.start.y)))
		},
		intersects: function (r) {
			return (intersects(this, r) || intersects(r, this)) ;
		}	
	}
}

function maxArea(rectangleList){
	var max = rectangleList[0].area();
	var current = rectangleList[0];
	for (var i=1; i<rectangleList.length; i++){
		
		if (rectangleList[i].area()>max){
			max = rectangleList[i].area();
			current = rectangleList[i];
		} 
	}
	return current;
} 

function calculatePerimeter(rectangleList){
	var max = rectangleList[0].perimeter();
	var current = rectangleList[0];
	for (var i=1; i<rectangleList.length; i++){
		
		if (rectangleList[i].perimeter()>max) {
			max = rectangleList[i].perimeter();
			current = rectangleList[i]
		} 
	}
	return current;

	if (calculatePerimeter(rectangleList) === maxArea(rectangleList)) console.log ("perimetrul si area sunt la identice")
}

function between(x, min, max){
    if ((min<=x) && (x<=max)) return true;
	else return false
}

function intersects(r1, r2) {
	if ((between(r1.start.x, r2.start.x, r2.end.x) || between(r1.end.x, r2.start.x, r2.end.x))
		&& (between(r1.end.y, r2.start.y, r2.end.y) || between(r1.end.y, r2.start.y, r2.end.y)))
		return true;
	return false;
}
// console.log(between(2,1,4))

var l = createRectangleList(2,ReturnRectangular2)
console.log(l)

console.log (maxArea(l).area())
console.log (maxArea(l).perimeter())

console.log(l[0].intersects(l[1]))


var r = ReturnRectangular2;

// console.log(">>", r(0,0,10,10).intersects(r(5,5,10,10)))
