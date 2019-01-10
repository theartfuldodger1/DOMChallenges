/*
	In a Javascript file, write a program which checks the following things:
	a.  checks that the password is 12345678.
	b.  if the password is incorrect, send an alert message
	c.  Your page should also include an <h1> tag. If the information in the form 
		is correct, have Javascript change the text in the <h1>.HTML page. 
		It should include inputs for a username, email, and password. 
		Also a submit button.
*/

var h1 = document.querySelector("h1");
var pw = document.querySelector("#pw");
let passw = "12345678";
var pwIn;

pw.addEventListener("change", function(){
	pwIn = pw.value;
});

function checkPassword() {
 	if(pwIn !== passw)
		window.alert("YOU SHALL NOT PASS");
	else
		h1.textContent = "Hooray for you!";
};