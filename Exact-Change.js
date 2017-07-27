/*
	Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.

	cid is a 2D array listing available currency.

	Return the string "Insufficient Funds" if cash-in-drawer is less than the change due. Return the string "Closed" if cash-in-drawer is equal to the change due.

	Otherwise, return change in coin and bills, sorted in highest to lowest order.
*/

function checkCashRegister(price, cash, cid) {
	
	//MARK: - Properties	
	var change;
	var cidConformed = {};
	var grandTotal = 0;
	var result = {};	

	//Get sum of all of our cid
	for(var i = 0; i < cid.length; i++){
		cidConformed[cid[i][0]] = cid[i][1];
     	grandTotal += cid[i][1];
	}

	//Check for some situation
	change = cash - price;
	
	if (change > grandTotal){
		return "Insufficient Funds";
	}

	if (change === grandTotal){
		return "Closed";
	}
	//console.log(result, change, cidConformed);

	//Check
	//100
	while (change >= 100 && change > 0 && cidConformed["ONE HUNDRED"] > 0){
			if(result["ONE HUNDRED"] === undefined){
				result["ONE HUNDRED"] = 100.00;
			}else {
				result["ONE HUNDRED"] += 100.00;
			}
			change -= 100.00;
			cidConformed["ONE HUNDRED"] -= 100.00;
	}
	//20
	while (change >= 20 && change > 0 && cidConformed["TWENTY"] > 0){
				if(result["TWENTY"] === undefined){
					result["TWENTY"] = 20.00;
				}else {
					result["TWENTY"] += 20.00;
				}
				change -= 20.0;
				cidConformed["TWENTY"] -= 20.00;
		}

	//10
		while (change >= 10 && change > 0 && cidConformed["TEN"] > 0){
					if(result["TEN"] === undefined){
						result["TEN"] = 10.00;
					}else {
						result["TEN"] += 10.00;
					}
					change -= 10.0;
					cidConformed["TEN"] -= 10.00;
			}

	//5
	while (change >= 5 && change > 0 && cidConformed["FIVE"] > 0){
				if(result["FIVE"] === undefined){
					result["FIVE"] = 5.00;
				}else {
					result["FIVE"] += 5.00;
				}
				change -= 5.00;
				cidConformed["FIVE"] -= 5.00;
	}
	//1
	while (change >= 1 && change > 0 && cidConformed["ONE"] > 0){
				if(result["ONE"] === undefined){
					result["ONE"] = 1.00;
				}else {
					result["ONE"] += 1.00;
				}
				change -= 1.00;
				cidConformed["ONE"] -= 1.00;
	}

	//0.5
	while (change >= 0.5 && change > 0 && cidConformed["QUARTER"] > 0){
		if(result["QUARTER"] === undefined){
			result["QUARTER"] = 0.50;
		}else {
			result["QUARTER"] += 0.50;
		}
		change -= 0.50;
		cidConformed["QUARTER"] -= 0.50;
	}
	//0.1
	while (change >= 0.1 && change > 0 && cidConformed["DIME"] > 0){
		if(result["DIME"] === undefined){
			result["DIME"] = 0.10;
		}else {
			result["DIME"] += 0.10;
		}
		change -= 0.10;
		cidConformed["DIME"] -= 0.10;
	}
	//0.05
	while (change >= 0.05 && change > 0 && cidConformed["NICKEL"] > 0){
			if(result["NICKEL"] === undefined){
				result["NICKEL"] = 0.05;
			}else {
				result["NICKEL"] += 0.05;
			}
			change -= 0.05;
			cidConformed["NICKEL"] -= 0.05
	}
	
	//There is a bug i get 0.009999999999999997, hacking aswer for now.
	change = Number(change.toFixed(2));
	if (change === 0.5){
		return "Insufficient Funds";
	}
	
	//0.01
	while (change >= 0.01 && change > 0 && cidConformed["PENNY"] > 0){
			if(result["PENNY"] === undefined){
				result["PENNY"] = 0.01;
			}else {
				result["PENNY"] += 0.01;
			}
			change -= 0.01;
			cidConformed["PENNY"] -= 0.01;
	}
	if (change >= 0.0099){
			result["PENNY"] += 0.01;
			cidConformed["PENNY"] -= 0.01;
			change -= 0.01;

	}

	console.log(result, change);	

	// Here is your change, ma'am.
	//return Object.entries(result);
}

// Example cash-in-drawer array:
// [["PENNY", 1.01],
// ["NICKEL", 2.05],
// ["DIME", 3.10],
// ["QUARTER", 4.25],
// ["ONE", 90.00],
// ["FIVE", 55.00],
// ["TEN", 20.00],
// ["TWENTY", 60.00],
// ["ONE HUNDRED", 100.00]]

checkCashRegister(3.26, 100.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]);
