export{}

function concatNameWithSpace(lastName: string, firstName: string): string {
	return `${lastName} ${firstName}`;
}

const func = concatNameWithSpace;
const result = func("田中", "太郎");
console.log(result);
