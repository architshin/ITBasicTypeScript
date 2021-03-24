export{}

function calcConeVolume(radius: number, height: number): number {
	return radius * radius * 3.14 * height / 3;
}
function calcCylinderVolume(radius: number, height: number): number {
	return radius * radius * 3.14 * height;
}
function showVolume(f: (radius: number, height: number) => number) {
	const volume = f(6, 10);
	console.log(`計算された体積: ${volume}`);
}

const funcList = [calcConeVolume, calcCylinderVolume];
for(const func of funcList) {
	showVolume(func);
}
