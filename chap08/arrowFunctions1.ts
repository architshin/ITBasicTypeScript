export{}

let func = function(radius: number) {
	console.log(`半径${radius}の面積: ${radius * radius * 3.14}`);
}
func(5);

func = (radius: number) => {
	console.log(`半径${radius}の面積: ${radius * radius * 3.14}`);
}
func(5);

func = (radius: number) => console.log(`半径${radius}の面積: ${radius * radius * 3.14}`);
func(5);
