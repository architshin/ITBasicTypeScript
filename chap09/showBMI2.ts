export{}

class BodyMass {
	name: string = "";
	private _height: number = 0;
	private _weight: number = 0;

	constructor(name: string, height: number, weight: number) {
		this.name = name;
		if(height > 0) {
			this._weight = weight;
		}
		if(weight > 0) {
			this._height = height;
		}
	}

	showBMI() {
		console.log(`${this.name}さんのBMI値: ${this.bmi}`);
	}
	
	showIdealWeight() {
		console.log(`${this.name}さんの理想体重: ${this.idealWeight}kg`);
	}

	set weight(value: number) {
		if(value < 0) {
			value = 0;
		}
		this._weight = value;
	}

	set height(value: number) {
		if(value < 0) {
			value = 0;
		}
		this._height = value;
	}

	get bmi(): number {
		let bmi = this._weight / (this._height/100) ** 2;
		bmi = Math.round(bmi * 10) / 10;
		return bmi;
	}

	get idealWeight(): number {
		let idealWeight = 22 *  (this._height/100) ** 2;
		idealWeight = Math.round(idealWeight);
		return idealWeight;
	}
}

const nakatani = new BodyMass("中谷和弘", 171.4, 68.4);
nakatani.showBMI();
nakatani.showIdealWeight();
