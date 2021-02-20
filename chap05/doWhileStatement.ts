export{}

let ans = 0;
let i = 1;
do {
	ans += i;
	i++;
} while(i <= 100);
console.log(`結果: ${ans}`);
console.log(`ループ終了後のi: ${i}`);
