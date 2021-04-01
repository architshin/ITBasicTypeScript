export{}

function concatNameWithSpace(lastName: string, firstName: string): string {
	return `${lastName} ${firstName}`;
}

function concatNameWithDot(lastName: string, firstName: string): string {
	return `${lastName}・${firstName}`;
}

function showConcatName(f: (lastName: string, firstName: string) => string) {
	const result = f("田中", "太郎");
	console.log(result);
}

const funcList = [concatNameWithSpace, concatNameWithDot];
for(const func of funcList) {
	showConcatName(func);
}
