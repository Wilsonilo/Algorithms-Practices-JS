//Convert the given number into a roman numeral.

function convertToRoman(num) {
	
	var romanNumbers = {
		1000 	: 	"M",
		900		:	"CM",
		500		:	"D",
		100		:	"C",
		90		:	"XC",
		50		:	"L",
		40		:	"XL",
		10		:	"X",
		9		:	"IX",
		5		:	"V",
		4		:	"IV",
		1		:	"I"
	};
 	var romanNumber = "";
	
	if(num > 999){
	
		var numThousands = String(num).split('');
		var thousands    = Number(numThousands[0]);

		if (thousands == 1){
			romanNumber = romanNumber + romanNumbers[1000];
			num -= 1000;
		
			} else {
			for(var i = 1; i <= thousands; i++ ){
				romanNumber = romanNumber + romanNumbers[1000];
				num -= 1000;
			}
		}

	}


	if(num >= 100 && num <= 999){
		
		var numHundreds = String(num).split('');
		var hundreds    = Number(numHundreds[0]);
		
		if (hundreds == 9){
			romanNumber = romanNumber + romanNumbers[900];
			hundreds -= 9;
			num -= 900;
		}

		if (hundreds >= 5){
			romanNumber = romanNumber + romanNumbers[500];
			hundreds -= 5;
			num -= 500;
		}
		for(var j = 1; j <= hundreds; j++ ){
			romanNumber = romanNumber + romanNumbers[100];
			num -= 100;
		}

	}
	
	if(num >= 10 && num <= 99){
	 	var numDeceneas = String(num).split('');
		var decenas    	= Number(numDeceneas[0]);

		if (decenas == 9){
			romanNumber = romanNumber + romanNumbers[90];
			decenas -= 9;
			num -= 90;
		}

		if (decenas >= 5){
			romanNumber = romanNumber + romanNumbers[50];
			decenas -= 5;
			num -= 50;
		}
		if (decenas == 4){
			romanNumber = romanNumber + romanNumbers[40];
			decenas -= 4;
			num -= 40;
		}
		for(var k = 1; k <= decenas; k++ ){
			romanNumber = romanNumber + romanNumbers[10];
			num -= 10;
		}	
		
	}

	if(num >= 1 && num <= 9){
	 	var numSingles = String(num).split('');
		var singles    	= Number(numSingles[0]);

		if (singles == 9){
			romanNumber = romanNumber + romanNumbers[9];
			singles -= 9;
			num -= 9;
		}

		if (singles >= 5){
			romanNumber = romanNumber + romanNumbers[5];
			singles -= 5;
			num -= 5;
		}
		
		if (singles == 4){
			romanNumber = romanNumber + romanNumbers[4];
			singles -= 4;
			num -= 4;
		}

		for(var m = 1; m <= singles; m++ ){
			romanNumber = romanNumber + romanNumbers[1];
			num--;
		}
	}
	console.log(num);
	console.log(romanNumber);
    return romanNumber;
}

convertToRoman(9999);
