export{}

function concatNameWithSpace(lastName: string, firstName: string): string {
	return `${lastName} ${firstName}`;
}

function concatNameWithDot(lastName: string, firstName: string): string {
	return `${lastName}・${firstName}`;
}

const funcList = [concatNameWithSpace, concatNameWithDot];
for(const func of funcList) {
	const result = func("田中", "太郎");
	console.log(result);
}
