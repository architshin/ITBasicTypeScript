export{}

let func = function(radius: number): number {
	return radius * radius * 3.14;
}
let result = func(5);
console.log(result);

func = (radius: number): number => {
	return radius * radius * 3.14;
}
result = func(5);
console.log(result);

func = (radius: number): number => radius * radius * 3.14;
result = func(5);
console.log(result);
