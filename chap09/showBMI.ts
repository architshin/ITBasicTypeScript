export{}

class BodyMass {
	name: string = "";
	height: number = 0;
	weight: number = 0;

	constructor(name: string, weight: number, height: number) {
		this.name = name;
		this.weight = weight;
		this.height = height;
	}

	showBMI() {
		let bmi = this.weight / (this.height/100) ** 2;
		bmi = Math.round(bmi * 10) / 10;
		console.log(`${this.name}さんのBMI値: ${bmi}`);
	}
	
	showIdealWeight() {
		let idealWeight = 22 *  (this.height/100) * (this.height/100);
		idealWeight = Math.round(idealWeight);
		console.log(`${this.name}さんの理想体重: ${idealWeight}kg`);
	}
}

const nakatani = new BodyMass("中谷和弘", 68.4, 171.4);
nakatani.showBMI();
nakatani.showIdealWeight();
