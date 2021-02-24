export{}

let i = 1;
while(i <= 10) {
	const num = Math.round(Math.random() * 10);
	console.log(`${i}個目の乱数: ${num}`);
	const ans = num / i;
	console.log(`割り算の結果: ${ans}`);
	i++;
}
