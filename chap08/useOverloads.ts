export{}

function descOneself(name: string, age: number);
function descOneself(name: string, message: string);
function descOneself(name: string, ageOrMsg: number|string) {
	let desc = `こんにちは、${name}です。`;
	if(typeof ageOrMsg == "string") {
		desc += ageOrMsg;
	}
	else {
		desc += `年齢は${ageOrMsg}歳です。`;
	}
	console.log(desc);
}

descOneself("江藤", 24);
descOneself("江藤", "よろしくお願いします!");
