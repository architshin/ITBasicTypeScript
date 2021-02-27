export{}

const nameList: {[key: number]: string;} =
{
	349: "中田", 
	451: "田村", 
	122: "村井", 
	156: "井上", 
	556: "上田"
};
for(const key in nameList) {
	console.log(`ID番号${key}: ${nameList[key]}`);
}
nameList[556] = "上野";
nameList[551] = "野宮";
for(const key in nameList) {
	console.log(`ID番号${key}: ${nameList[key]}`);
}
