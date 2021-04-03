export{}

class DescOneself {
	message: string = "";

	constructor(name: string, message: string);
	constructor(name: string, month: number, day: number);
	constructor(name: string, msgOrMonth: number|string, day?: number) {
		let msg = `こんにちは、${name}です。`;
		if(typeof msgOrMonth == "string") {
			msg += msgOrMonth;
		} else {
			msg += `${msgOrMonth}月${day}日生まれです。`;
		}
		this.message = msg;
	}
}

const desc1 = new DescOneself("江藤", "よろしくお願いします!");
console.log(desc1.message);
const desc2 = new DescOneself("江藤", 6, 12);
console.log(desc2.message);
