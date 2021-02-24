export{}

console.log("処理開始");
let i = 1;
let num = Math.round(Math.random() * 10);
while(i <= 10) {
	console.log(`${i}回目のループの乱数の値: ${num}`);
	num = Math.round(Math.random() * 10);
	i++;
}
console.log(`ループ終了後のi: ${i}`);
console.log("処理終了");
