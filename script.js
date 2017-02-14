function randomString() {
	var stringAlpha = "abcdefghijklmnopqrstuvwxyz";
	var indexNum = 5;
	var randomNum;
	//Math.floor(Math.random() * 26);//Returns random number from 0 to 25
											//Math.random() returns random float
										    /*Math.floor() returns nearest integer 
										    rounded down*/
	//alert('random number: ' + randomNum);//Returns alert message of random number from 0 to 25
	//alert(chars.charAt(randomNum));// Returns alert message of random character
	// alert(chars.charAt(indexNum));
	// alert('There are ' + chars.length + ' characters in the alphabet.');

	var charString = "";
	var emptyArray = [];
	var finalString = "";

	for(i = 1; i <= 8;i++) {
		//alert(i);
		randomNum = Math.floor(Math.random() * 26);
		charString = stringAlpha.charAt(randomNum);
		//alert(charString);
		emptyArray.push(charString);
		//alert(emptyArray);
	}

	finalString = emptyArray.join('');
	document.getElementById('demo').innerHTML = finalString;
	document.randform.randomfield.value = finalString;
} 