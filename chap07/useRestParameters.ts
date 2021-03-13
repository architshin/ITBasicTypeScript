export{}

function sumScore(...scores: number[]): number {
	let total = 0;
	for(const score of scores) {
		total += score;
	}
	return total;
}

const total6 = sumScore(10, 9, 9, 10, 8, 9);
console.log(`6人の審査員の合計点: ${total6}`);
const total4 = sumScore(10, 9, 8, 9);
console.log(`4人の審査員の合計点: ${total4}`);
