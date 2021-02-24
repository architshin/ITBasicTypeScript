export{}

let sum = 0;
for(let i = 1; i <= 10; i++) {
	const num = Math.round(Math.random() * 100);
	console.log(`${i}個目の乱数: ${num}`);
	sum += num;
}
console.log(`合計値: ${sum}`);
