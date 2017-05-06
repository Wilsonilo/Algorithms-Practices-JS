
function pairElement(str) {
	str = str.toUpperCase();
	str = str.split("");
	var holder = [];
	var DNA = {
		
		"A": "T",
		"T": "A",
		"G": "C",
		"C": "G"
	};
	
	for(var i = 0; i < str.length; i ++){
		holder[i] = [ str[i] , DNA[str[i]]];
	}
	
	str = holder;
	//console.log(str);
	return str;
}

pairElement("GCG");
