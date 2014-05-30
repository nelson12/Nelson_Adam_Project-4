//Adam Nelson
//SDI Online
// 05/29/2014
//Project 4

	
//variables			
var phone = "1234567890";	
var emailAddress = "Nelson12@fullsail.edu"
var url = "http://www.blizzard.com"
var string = "world of warcraft"

//functions

	var phoneNumber =function(phone){
		if (phone.indexOf("-") === -1){
		var areaCode=phone.substring(0,3);
		var firstDigits=phone.substring(3,6);
		var lastDigits=phone.substring(6,10);
		var goodPhoneNumber= (areaCode + " - " + firstDigits + " - " + lastDigits);
		var phone = "1234567890";	
		return goodPhoneNumber;
		}else{
		return goodPhoneNumber;
		};
		
	};
	//calling function
	var goodPhoneNumber = phoneNumber(phone);
	console.log(goodPhoneNumber);
	console.log("Good Phone Number");

	
	var email =function(emailAddress){
		if(emailAddress.indexOf("@") === -1 || emailAddress.indexOf(".") === -1){
		console.log("Not a valid email address.");
		}else{
		return email;
		};
	};
	var emailAddress = "Nelson12@fullsail.edu";
	email(emailAddress);
	console.log("Valid Email");

	var goodUrl = function (url){
		if(url.substring(0,7)==="http://" || url.sustring(0,8) === "https://"){
		return url;
		}else{
		console.log("Not a valid url");
		};
	};
	var url = "http://www.blizzard.com";
	goodUrl(url);
	console.log("Good URL");

	var stringCaps = function (string){
		var stringLength = string.length;
		var words = string.split(" ");
		var capitalized = [];
		
		while( capitalized.length<words.length){
			for( var i=0; i<words.length; i++){
				var firstLetter= words[i].substring(0,1);
				var capital= firstLetter.toUpperCase();
				var remainingLetters = words[i].substring(1, words[i].length);
				var capitalWord = capital + remainingLetters;
				capitalized.push(capitalWord);
			};
		};
	var finalString = capitalized.join(" ");
	return capitalized;
	};
	var string = "world of warcraft";
	var capital = stringCaps(string);
	console.log(capital);

//String to a number
var number= "42"
	number= parseInt(number)
	console.log(number);
	
	
//Number to a specific decimal place
function roundDecimal(b){
	b.toFixed(4)
	return b;
};
var number = roundDecimal (456.6789);
console.log(number);
	
	
	
	


