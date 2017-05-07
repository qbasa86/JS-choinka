var number = prompt("Podaj wysokość choinki");

function drawTree(howMany){
	for(i=0; i<howMany; i++){
		var star = "";
			for(j=0; j<=i; j++){
			star += "*";
			}
		console.log(star);
	}
}
drawTree(number);