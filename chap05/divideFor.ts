export{}

for(let i = 1; i <= 10; i++) {
	const num = Math.round(Math.random() * 10);
	console.log(`${i}個目の乱数: ${num}`);
	const ans = num / i;
	console.log(`割り算の結果: ${ans}`);
}
