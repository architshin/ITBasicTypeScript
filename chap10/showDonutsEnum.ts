export{}

enum Donut {OLD_FASHIONED, CHOCOLATE_OLD_FASHIONED, HOME_CUT}

function showPrice(donut: Donut) {
	let price = 120;
	if(donut == Donut.CHOCOLATE_OLD_FASHIONED) {
		price = 140;
	} else {
		price = 110;
	}
	console.log(`選んだドーナツの値段: ${price}`);
}

showPrice(Donut.CHOCOLATE_OLD_FASHIONED);
