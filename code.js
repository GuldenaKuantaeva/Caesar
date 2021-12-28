let fs = require('fs');
let arg = process.argv;
data = fs.readFileSync('text.txt');
data = data.toString();
s = fs.readFileSync('move.txt');
s = s.toString();
s = s * 1;
Alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
alph = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
canon = {
	'a' : 0.0817, 'b' : 0.0149, 'c' : 0.0278, 'd' : 0.0425, 'e' : 0.127, 'f' : 0.0223, 'g':0.0202,
	'h' : 0.0609, 'i' : 0.0675, 'j' : 0.0015, 'k' : 0.0077, 'l' : 0.0403, 'm' : 0.0241, 'n' : 0.0675,
	'o' : 0.0751, 'p' : 0.0193,'q' : 0.001, 'r' : 0.0599, 's' : 0.0633, 't' : 0.0906, 'u' : 0.0276, 
	'v' : 0.0098, 'w' : 0.0236, 'x' : 0.0015, 'y' : 0.0197, 'z' : 0.0005,
	
	'A' : 0.0817, 'B' : 0.0149, 'C' : 0.0278, 'D' : 0.0425, 'E' : 0.127, 'F' : 0.0223, 'G':0.0202, 
	'H' : 0.0609,'I' : 0.0675, 'J' : 0.0015, 'K' : 0.0077, 'L' : 0.0403, 'M' : 0.0241, 'N' : 0.0675, 
	'O' : 0.0751, 'P' : 0.0193, 'Q' : 0.001, 'R' : 0.0599, 'S' : 0.0633, 'T' : 0.0906, 'U' : 0.0276,
	'V' : 0.0098, 'W' : 0.0236, 'X' : 0.0015, 'Y' : 0.0197, 'Z' : 0.0005
};
		
ans = new Array();
for (i = 0; i < data.length; i++){
	if (alph.includes(data[i]) == true){
		ans.push(alph[(alph.indexOf(data[i]) + s) % 26]);
	}
	if (Alphabet.includes(data[i]) == true){
		ans.push(Alphabet[(Alphabet.indexOf(data[i]) + s) % 26]);
	}
	if ((Alphabet.includes(data[i]) == false) && (alph.includes(data[i]) == false)){
		ans.push(data[i]);
	}
}
ans2 = "";
for (i = 0; i < ans.length; i++){
	ans2 = ans2 + ans[i];
}
fs.writeFileSync('coded.txt', ans2);