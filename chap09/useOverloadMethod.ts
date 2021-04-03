export{}

class DescOneself {
	message: string = "";

	setMessage(name: string, message: string): void;
	setMessage(name: string, month: number, day: number): void;
	setMessage(name: string, msgOrMonth: number|string, day?: number): void {
		let msg = `こんにちは、${name}です。`;
		if(typeof msgOrMonth == "string") {
			msg += msgOrMonth;
		} else {
			msg += `${msgOrMonth}月${day}日生まれです。`;
		}
		this.message = msg;
	}
}

const desc1 = new DescOneself();
desc1.setMessage("江藤", "よろしくお願いします!");
console.log(desc1.message);
const desc2 = new DescOneself();
desc2.setMessage("江藤", 6, 12);
console.log(desc2.message);
