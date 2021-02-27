export{}

const heightList: {[key:string]: number} = {};
heightList["Tomoko"] = 155.4;
heightList["Yumi"] = 162.3;
heightList["Ayaka"] = 157.9;
heightList["Rina"] = 170.2;
heightList["Yoshie"] = 153.7;
for(const key in heightList) {
	console.log(`${key}さんの身長: ${heightList[key]}`);
}
heightList.Yoshie = 154.6;
console.log(`Yoshieさんの身長: ${heightList["Yoshie"]}`);
