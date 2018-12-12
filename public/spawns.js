function spawnShot(){
	playShotSound();
	if(shootingSpeed%100==0&&shootingSpeed!=100){
		diff++;
		//document.getElementById("diff").innerHTML = "Difficulty : "+diff;
	}
	shootingSpeed -= increasingDiff;
	if(shootingSpeed<= minShootingSpeed){
		shootingSpeed = minShootingSpeed;
	}
	var xspeed = (Math.random()*25)-7.5;
	var yspeed = (Math.random()*25);
	var Pow = Math.random()*35;
	var colorTemp = Math.floor(Pow/4)+"";
	colorTemp = 9-colorTemp-2;
	var toColor = "ff"+colorTemp+colorTemp+colorTemp+colorTemp;
	var toAdd = new Squareshot(spawnShotsX,spawnShotsY,xspeed,yspeed,Pow,toColor);
	shots.push(toAdd);
	if(gameOn&&alive){
		setTimeout(spawnShot,Math.floor(Math.random()*shootingSpeed));
	}
}

function spawnHealth(){
	playShotSound();
	var xspeed = (Math.random()*25)-7.5;
	var yspeed = (Math.random()*25);
	var Pow = Math.random()*35;
	var toAdd = new Squarehealth(spawnShotsX,spawnShotsY,xspeed,yspeed,Pow);
	healths.push(toAdd);
	if(gameOn&&alive){
		setTimeout(spawnHealth,Math.floor(Math.random()*shootingSpeed*10));
	}
}

function spawnSlowers(){
	playShotSound();
	var xspeed = (Math.random()*25)-7.5;
	var yspeed = (Math.random()*25);
	var Pow = Math.random()*35;
	var toAdd = new Squareslow(spawnShotsX,spawnShotsY,xspeed,yspeed,Pow);
	slowers.push(toAdd);
	if(gameOn&&alive){
		setTimeout(spawnSlowers,Math.floor(Math.random()*shootingSpeed*10));
	}
}

function spawnBlinders(){
	playShotSound();
	var xspeed = (Math.random()*25)-7.5;
	var yspeed = (Math.random()*25);
	var Pow = Math.random()*35;
	var toAdd = new Squareblinder(spawnShotsX,spawnShotsY,xspeed,yspeed,Pow);
	blinders.push(toAdd);
	if(gameOn&&alive){
		setTimeout(spawnBlinders,Math.floor(Math.random()*shootingSpeed*10));
	}
}

function spawnInvis(){
	playShotSound();
	var xspeed = (Math.random()*25)-7.5;
	var yspeed = (Math.random()*25);
	var Pow = Math.random()*35;
	var toAdd = new SquareInvis(spawnShotsX,spawnShotsY,xspeed,yspeed,Pow);
	invis.push(toAdd);
	if(gameOn&&alive){
		setTimeout(spawnInvis,Math.floor(Math.random()*shootingSpeed*10));
	}
}

function spawnGoldCoin(){
	playShotSound();
	var xspeed = (Math.random()*25)-7.5;
	var yspeed = (Math.random()*25);
	var Pow = Math.random()*35;
	var toAdd = new SquareGoldCoin(spawnShotsX,spawnShotsY,xspeed,yspeed,Pow);
	goldCoins.push(toAdd);
	if(gameOn&&alive){
		setTimeout(spawnGoldCoin,Math.floor(Math.random()*shootingSpeed*10));
	}
}

function spawnSilverCoin(){
	playShotSound();
	var xspeed = (Math.random()*25)-7.5;
	var yspeed = (Math.random()*25);
	var Pow = Math.random()*35;
	var toAdd = new SquareSilverCoin(spawnShotsX,spawnShotsY,xspeed,yspeed,Pow);
	silverCoins.push(toAdd);
	if(gameOn&&alive){
		setTimeout(spawnSilverCoin,Math.floor(Math.random()*shootingSpeed*10));
	}
}

function spawnEmerald(){
	playShotSound();
	var xspeed = (Math.random()*25)-7.5;
	var yspeed = (Math.random()*25);
	var Pow = Math.random()*35;
	var toAdd = new SquareEmerald(spawnShotsX,spawnShotsY,xspeed,yspeed,Pow);
	emeralds.push(toAdd);
	if(gameOn&&alive){
		setTimeout(spawnEmerald,Math.floor(Math.random()*shootingSpeed*10));
	}
}