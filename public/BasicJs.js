
function backToOriginalSpeed(){
	movementSpeed = 10;
	jumpPower = 40;
}

function backToOriginalView(){
	deleteHalf = false;
}

function backToOriginalInvis(){
	character.color = "red";
	canBeHit = true;
}

function fillBackground(){
	/*ctx.beginPath();
	ctx.rect(0,0,width_C,height_C);
	ctx.fillStyle = "black";
	ctx.fill();*/
	ctx.drawImage(background1,0,0,width_C,height_C);
	//ctx.drawImage(foreground1,0,0,width_C,height_C);
	//ctx.drawImage(metalSupport,0,0,width_C,height_C);
}



function moveleft(){
	if(leftPressed){
		character.x += movementSpeed/2;
		if(character.x+50>=width_C){
			character.x = width_C-50;
		}
	}
}

function moveright(){
	if(rightPressed){
		character.x -= movementSpeed/2;	
		if(character.x <= 0 ){
			character.x = 0;
		}
	}
}


function deleteHalfView(){
	ctx.beginPath();
	ctx.rect(0,0,width_C,height_C/1.7);
	ctx.fillStyle = "black";
	ctx.fill();
}
function playShotSound(){
	shotgun1.currentTime = 0;
	shotgun1.play();
	shotAnimationShooter();
}

function death(){
	alive = false;
	shotgun1.volume = 0;
	ctx.beginPath();
	ctx.rect(0,0,width_C,height_C);
	ctx.fillStyle = "red";
	ctx.fill();
	alert("You lost!");
	alert("Your Maximum difficulty was "+diff);
	alert("You collected "+score+" points.")
}
function drawShooter(){
	if(shootSpriteToUse==0){
		ctx.drawImage(canon1,width_C/2-60,32,60,70);
	}else{
		ctx.drawImage(canon2,width_C/2-60,32,60,70);
	}
}

function shotAnimationShooter(){
	shootSpriteToUse = 1;
	setTimeout(backToOriginalShooter,100);
}

function backToOriginalShooter(){
	shootSpriteToUse = 0;
}

function drawHealthBar(){
	ctx.drawImage(emptyHearts,5,5,354,30);
	ctx.drawImage(fullHearts,0,0,mapToHealthBar(),45,5,5,mapToHealthBar()/1.5,30);
}

function mapToHealthBar(){
	return 5.3*character.health;
}