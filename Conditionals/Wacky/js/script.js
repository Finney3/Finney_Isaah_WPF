// Conditionals Wacky Isaah Finney 

//This project is to determine the champioship winners of a 4 team tournament bracket

//These are the var for the 4 teams 1st match ups
var team1 = prompt("Profuse Gaming Final Score?")   // User input for var storage
var team2 = prompt ("Back2Back Gaming Final Score")
var team3 = prompt ("High Rollers Gaming Final Score")
var team4 = prompt ("Evil Macs Final Score")

//Display of all the team score user inputs
console.log(team1);
console.log(team2);
console.log(team3);
console.log(team4);


//To determine what team will advance to the play the next team
if (team1 > team2){
	console.log("Profuse Gaming");
}else
	console.log("Back2Back Gaming");
if (team3 < team4){
	console.log("High Rollers Gaming");
}else
		console.log("Evil Macs");

