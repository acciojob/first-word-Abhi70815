function firstWord(s) {
  // your code here
	s=s.trim();
if(s === '' ){
return '';
}	
	let res='';
	for (let i = 0; i < s.length; i++) {
		if(s[i]==' '){
          return res;
		}
		res+=s[i];
	}
	
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
