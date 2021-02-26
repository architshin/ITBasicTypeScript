export{}

const nameList: {[key: number]: string;} = {};
nameList[349] = "中田";
nameList[451] = "田村";
nameList[122] = "村井";
nameList[156] = "井上";
nameList[556] = "上野";

for(let key in nameList) {
	console.log(`ID番号${key}: ${nameList[key]}`);
}
