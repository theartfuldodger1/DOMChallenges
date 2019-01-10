//  BONUS: Create an HTML page with a form that asks the user to input the value of a sphere's radius. 
// 	Write Javascript that gives them back the volume of the sphere. (There are many different ways to execute this. 
// 	You can give the user information back in another input box on the page, as an alert, or any other way you can think of. 
// 	You can look up how to use the Javascript Math object to simplify your calculations.)

var radius = document.querySelector("input[name='radius']");
var radiusIn = 0;

radius.addEventListener("change", function(){
	radiusIn = radius.value;
});

function sphereMath() {
	var volume = (4/3)*Math.PI*Math.pow(radiusIn, 3);

	alert("The volume of your sphere is " + volume + " cubic units.");
};