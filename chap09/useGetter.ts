export{}

class Student {
	name: string = "";
	english: number = 0;
	math: number = 0;
	japanese: number = 0;

	constructor(name: string, english: number, math: number, japanese: number) {
		this.name = name;
		this.english = english;
		this.math = math;
		this.japanese = japanese;
	}
	
	showScoresSum() {
		const sum = this.english + this.math + this.japanese;
		console.log(`${this.name}の合計得点: ${sum}`);
	}

	showScoresAvg() {
		const sum = this.english + this.math + this.japanese;
		const avg = Math.round(sum/3);
		console.log(`${this.name}の平均点: ${avg}`);

	}

	get total(): number {
		return this.english + this.math + this.japanese;
	}
}

const taro = new Student("宮本太郎", 78, 82, 85);
taro.showScoresSum();
taro.showScoresAvg();
console.log(`合計値: ${taro.total}`);
const hanako = new Student("松下花子", 91, 80, 87);
hanako.showScoresSum();
hanako.showScoresAvg();
console.log(`合計値: ${hanako.total}`);
