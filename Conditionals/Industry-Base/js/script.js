// Conditionals Industrial Isaah Finney 

//This code will deplict on the time on your computer to determine a website to go to as far as being based on your time

// Variables for the timing depending what website will open
/*var timeEarly = "00:00:00";
var timeMid = "11:59:00";
var timeLate = "18:00:00";*/

/*Second test with the easier way to run this code using the get hours and take down some of the vars in this assignment to keep the code small and more simple
I used  the date method just to make this easier because trying to create all tyes of varibles and without using the date method this idea would never work unless just a user input there own time that
is on there computer but then I would also have to make sure the formatt is right in order to compare. Makes more sense to use the tools that are there and save time on the code.
*/
/*
var t= new Date();
var cHour = t.getHours();
var cMin = t.getMinutes();
var cSec= t.getSeconds();

if((cHour > 12) || (cHour == 12 && cMin == 0 && cSec == 0 )){
   console.log("Fragfest-gaming.com");
} else {
   console.log("https://www.facebook.com/pages/Somerset-Web-Solutions/575532319140161?ref=hl");
}
*/
//This is where I will make turn this code into tenary

var t= new Date();
var cHour = t.getHours();
var cMin = t.getMinutes();
var cSec= t.getSeconds();

var b = ((cHour > 12) || (cHour == 12 && cMin == 0 && cSec == 0 ));
(var b == true) ? console.log("Fragfest-gaming.com"); : console.log("https://www.facebook.com/pages/Somerset-Web-Solutions/575532319140161?ref=hl");

//Tenary form is confusing for this format using the method broken down into the varibles. I know the regular conditional works
//Any insite on how to get this to work would be greatly appreciated.