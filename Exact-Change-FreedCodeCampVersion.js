/*
	Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.

	cid is a 2D array listing available currency.

	Return the string "Insufficient Funds" if cash-in-drawer is less than the change due. Return the string "Closed" if cash-in-drawer is equal to the change due.

	Otherwise, return change in coin and bills, sorted in highest to lowest order.
*/
/* THERE IS A BUG WITH DECIMALS ON JS, even that THIS IS the OFFICIAL solution, you still do not get the correct aswerr:
https://forum.freecodecamp.org/t/freecodecamp-algorithm-challenge-guide-exact-change/16012 */
var denom = [
	{ name: 'ONE HUNDRED', val: 100.00},
	{ name: 'TWENTY', val: 20.00},
	{ name: 'TEN', val: 10.00},
	{ name: 'FIVE', val: 5.00},
	{ name: 'ONE', val: 1.00},
	{ name: 'QUARTER', val: 0.25},
	{ name: 'DIME', val: 0.10},
	{ name: 'NICKEL', val: 0.05},
	{ name: 'PENNY', val: 0.01}
];

function checkCashRegister(price, cash, cid) {
	
	//MARK: - Properties	
	var change;
	var grandTotal = 0;
	
	var register = cid.reduce(function(acc, curr) {
			acc.total += curr[1];
			acc[curr[0]] = curr[1];
			return acc;
		}, {total: 0});

	//Check for some situation
	change = cash - price;
	
	if (change > register.total){
		return "Insufficient Funds";
	}

	if (change === register.total){
		return "Closed";
	}

	 var change_arr = denom.reduce(function(acc, curr) {
			var value = 0;
			// While there is still money of this type in the drawer
			// And while the denomination is larger than the change reminaing
			while (register[curr.name] > 0 && change >= curr.val) {
				change -= curr.val;
				register[curr.name] -= curr.val;
				value += curr.val;

				// Round change to the nearest hundreth deals with precision errors
				change = Math.round(change * 100) / 100;
			}
			// Add this denomination to the output only if any was used.
			if (value > 0) {
					acc.push([ curr.name, value ]);
			}
			return acc; // Return the current Change Array
		}, []); // Initial value of empty array for reduce

	// Here is your change, ma'am.
	return change_arr;
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

console.log(checkCashRegister(19.50, 20.00, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1.00], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));
