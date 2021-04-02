export{}

class Student {
	name: string = "";
	english: number = 0;
	math: number = 0;
	japanese: number = 0;
	
	showScoresSum() {
		const sum = this.english + this.math + this.japanese;
		console.log(`${this.name}の合計得点: ${sum}`);
	}

	setData(name: string, english: number, math: number, japanese: number) {
		this.name = name;
		this.english = english;
		this.math = math;
		this.japanese = japanese;
	}

	showScoresAvg() {
		const sum = this.english + this.math + this.japanese;
		const avg = Math.round(sum/3);
		console.log(`${this.name}の平均点: ${avg}`);

	}
}

const taro = new Student();
taro.setData("宮本太郎", 78, 82, 85);
taro.showScoresSum();
taro.showScoresAvg();
const hanako = new Student();
hanako.setData("松下花子", 91, 80, 87);
hanako.showScoresSum();
hanako.showScoresAvg();
