export{}

const nameList: string[] = ["中田", "田村", "村井", "井上", "上野"];
for(let i = 0; i < nameList.length; i++) {
	console.log(`インデックス${i}: ${nameList[i]}`);
}
nameList[5] = "野宮";
for(let i = 0; i < nameList.length; i++) {
	console.log(`インデックス${i}: ${nameList[i]}`);
}
console.log(`インデックス${6}: ${nameList[6]}`);
nameList[8] = "宮本";
for(let i = 0; i < nameList.length; i++) {
	console.log(`インデックス${i}: ${nameList[i]}`);
}
