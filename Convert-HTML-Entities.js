//Convert HTML Entities

/*
Convert the characters &, <, >, " (double quote), and ' (apostrophe), 
in a string to their corresponding HTML entities.
*/

function convertHTML(str) {
	str = str.replace(/(&)|(<)|(>)|(")|(')/g, replacer);
	//console.log(str);
	return str;
}
function replacer(match, p1, p2, p3, p4, p5){
	if(p1){ return '&amp;'}
	if(p2){ return '&lt;';}
	if(p3){ return '&gt;';}
	if(p4){ return '&quot;';}
	if(p5){ return '&apos;';}
}

convertHTML("Dolce & Gabbana");

