export{}

class Hello {
	// 名前のプロパティ。
	name: string = "";

	// コンストラクタ。名前を受け取りプロパティに格納する。
	constructor(name: string) {
		this.name = name;
	}

	// 「こんにちは」と表示するメソッド。
	sayHello() {
		console.log(`${this.name}さん、こんにちは。`)
	}
}

class Greetings extends Hello {
	sayGoodMorning() {
		console.log(`${this.name}さん、おはようございます`);
	}
}

const taro = new Greetings("江口太郎");
taro.sayGoodMorning();
taro.sayHello();
