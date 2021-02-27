export{}

const studentNumbersList: {[key:string]: number} =
{
	"A": 35,
	"B": 36,
	"C": 35,
	"D": 37,
	"E": 34
};
for(const key in studentNumbersList) {
	console.log(`${key}組の人数: ${studentNumbersList[key]}`);
}
studentNumbersList["D"] = 36;
console.log(`D組の人数: ${studentNumbersList.D}`);
