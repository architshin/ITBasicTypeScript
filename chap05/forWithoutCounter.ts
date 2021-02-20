export{}

console.log("処理開始");
for(let num = Math.round(Math.random() * 10); num != 9; num = Math.round(Math.random() * 10)) {
	console.log(`乱数の値: ${num}`);
}
console.log("処理終了");
