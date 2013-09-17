// Expressions Personal Isaah Finney 9/12/2013


var protein1 = alert("If you are a amateure weight lifter take 1/2 gram of protein for every pound you weigh"); //Tells user information 
var protein2 = alert("If you are a serious weight lifter take 1 1/2 grams of protein for every pound you weight."); //Tells users different information
var pounds = prompt ("Whats your weight in LBS"); // ask for user input on weight
console.log(pounds); // print what user input to console
var amateure = prompt ("Amateure enter 1 and serious lifters enter 1.5"); // This is the where a user will either be a serious or amateure lifter base on what use inuts here
var total = pounds * amateure; // pounds times either 1 or 1.5
console.log((total) + " " + "Your require grams of protein needed daily"); //this gives the total that a weight trainer should take for protein.