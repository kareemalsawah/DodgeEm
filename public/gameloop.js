function gameLoop(){
	moveleft();
	moveright();
	fillBackground();
	drawShooter();
	character.draw();
	character.updatePosition();
	var newShots = [];
	for(var i = 0; i < shots.length; i++){
		shots[i].draw();
		shots[i].updatePosition();
			if(shots[i].isIntersectingChar()&&canBeHit){
				character.health -= shots[i].power;
				if(character.health<=0){
					character.health = 0;
					setTimeout(death,100);
					 i = shots.length();
				}
			}else if(shots[i].y > height_C){
			}else{
				newShots.push(shots[i]);
			}
	}
	var newHealths = [];
	for(var i = 0; i < healths.length; i++){
		healths[i].draw();
		healths[i].updatePosition();
		if(healths[i].isIntersectingChar()){
			character.health += healths[i].power;
		}else if(healths[i].y > height_C){
		}else{
			newHealths.push(healths[i]);
		}
	}
	var newSlowers = [];
	for(var i = 0; i < slowers.length; i++){
		slowers[i].draw();
		slowers[i].updatePosition();
		if(slowers[i].isIntersectingChar()&&canBeHit){
			movementSpeed -= 5;
			jumpPower -= 20;
			setTimeout(backToOriginalSpeed,5000);
		}else if(slowers[i].y > height_C){
		}else{
			newSlowers.push(slowers[i]);
		}
	}

	var newBlinders = [];
	for(var i = 0; i < blinders.length; i++){
		blinders[i].draw();
		blinders[i].updatePosition();
		if(blinders[i].isIntersectingChar()&&canBeHit){
			deleteHalf = true;
			setTimeout(backToOriginalView,5000);
		}else if(blinders[i].y > height_C){
		}else{
			newBlinders.push(blinders[i]);
		}
	}

	var newInvis = [];
	for(var i = 0; i < invis.length; i++){
		invis[i].draw();
		invis[i].updatePosition();
		if(invis[i].isIntersectingChar()){
			character.color = "gray";
			canBeHit = false;
			setTimeout(backToOriginalInvis,5000);
		}else if(invis[i].y > height_C){
		}else{
			newInvis.push(invis[i]);
		}
	}

	var newGoldCoins = [];
	for(var i = 0; i < goldCoins.length; i++){
		goldCoins[i].draw();
		goldCoins[i].updatePosition();
		if(goldCoins[i].isIntersectingChar()){
			score += 20;
		}else if(goldCoins[i].y > height_C){
		}else{
			newGoldCoins.push(goldCoins[i]);
		}
	}

	var newSilverCoins = [];
	for(var i = 0; i < silverCoins.length; i++){
		silverCoins[i].draw();
		silverCoins[i].updatePosition();
		if(silverCoins[i].isIntersectingChar()){
			score += 10;
		}else if(silverCoins[i].y > height_C){
		}else{
			newSilverCoins.push(silverCoins[i]);
		}
	}

	var newEmeralds = [];
	for(var i = 0; i < emeralds.length; i++){
		emeralds[i].draw();
		emeralds[i].updatePosition();
		if(emeralds[i].isIntersectingChar()){
			score += 40;
		}else if(emeralds[i].y > height_C){
		}else{
			newEmeralds.push(emeralds[i]);
		}
	}

	shots = newShots;
	healths = newHealths;
	slowers = newSlowers;
	blinders = newBlinders;
	invis = newInvis;
	goldCoins = newGoldCoins;
	silverCoins = newSilverCoins;
	emeralds = newEmeralds;

	if(deleteHalf){
		deleteHalfView();
	}
	drawHealthBar();
	ctx.drawImage(goldCoin,-10,30,80,80);
	ctx.font = "30px Arial";
	ctx.fillText(score,70,83);
	ctx.fillText("Difficulty: "+diff,10,120);
	if(alive){
		setTimeout(gameLoop,tickTime);
	}
}
