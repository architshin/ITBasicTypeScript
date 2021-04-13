export{}

class Student {
	// 名前と英数国の点数を表す各プロパティ。
	protected _name: string = "";
	protected _english: number = 0;
	protected _math: number = 0;
	protected _japanese: number = 0;

	// コンストラクタ。引数をプロパティに格納する。
	constructor(name: string, english: number, math: number, japanese: number) {
		this._name = name;
		this._english = english;
		this._math = math;
		this._japanese = japanese;
	}
	
	// 3教科の合計点を表示するメソッド。
	showScoresSum() {
		const sum = this._english + this._math + this._japanese;
		console.log(`${this._name}の合計得点: ${sum}`);
	}
}

class Student5 extends Student {
	private _science: number = 0;
	private _social: number = 0;

	constructor(name: string, english: number, math: number, japanese: number, science: number, social: number) {
		super(name, english, math, japanese)
		this._science = science;
		this._social = social;
	}

	showScoresSum() {
		super.showScoresSum();
		const sum = this._english + this._math + this._japanese + this._science + this._social;
		console.log(`${this._name}の5教科の合計得点: ${sum}`);
	}
}

const emi = new Student5("千原恵美", 85, 80, 90, 88, 83);
emi.showScoresSum();
