// Functions Personal Isaah Finney November 21, 2013

//Call For Fire Function
function callForfire(){
	var friendlies = 4985; // Declares friendlies value
	var enimeies =4658; // Declares enimeies value
	var dangerClose="It is not safe to fire ammunitions"; // string to print to console if condition is true
	var repeatFire="We have been cleared hot"; //string to print to console if the condition is false
if(friendlies > enimeies){
	 return console.log(repeatFire);
} else

		return console.log(dangerClose);

}
callForfire();

