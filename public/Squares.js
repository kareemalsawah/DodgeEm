function Squareshot(x,y,speedX,speedY,power,color){
	this.x = x;
	this.y = y;
	this.speedX = speedX;
	this.speedY = speedY;
	this.power = power;
	this.color = color;	
	this.ShotSize = 60;
	this.collisionMargin = 20;

	this.updatePosition = function(){
		this.x += speedX;
		this.y += speedY;
		if(this.x <= 0){
			speedX *= -1;
		}
		if(this.x >= width_C){
			speedX *= -1;
		}
	}

	this.draw = function(){
		ctx.drawImage(laserHit,this.x,this.y,this.ShotSize,this.ShotSize);
		/*ctx.beginPath();
		ctx.rect(this.x,this.y,shotSize,shotSize);
	    ctx.fillStyle = "#"+this.color;
	    ctx.fill();*/
	}

	this.isIntersectingChar = function(){
		if((this.y+this.ShotSize-this.collisionMargin) >= character.y-shiftUpY && this.y <= (character.y+50) && (this.x+this.ShotSize-this.collisionMargin)>character.x && this.x<(character.x+50)){
			return true;
		}else{
			return false;
		}
	}
}

function Squarehealth(x,y,speedX,speedY,power){
	this.x = x;
	this.y = y;
	this.speedX = speedX;
	this.speedY = speedY;
	this.power = power;

	this.updatePosition = function(){
		this.x += speedX;
		this.y += speedY;
		if(this.x <= 0){
			speedX *= -1;
		}
		if(this.x >= width_C){
			speedX *= -1;
		}
	}

	this.draw = function(){
		ctx.drawImage(heart,this.x,this.y,shotSize+15,shotSize+15);
		/*ctx.beginPath();
		ctx.rect(this.x,this.y,shotSize,shotSize);
	    ctx.fillStyle = "green";
	    ctx.fill();*/
	}

	this.isIntersectingChar = function(){
		if((this.y+shotSize+15) >= character.y-shiftUpY && this.y <= (character.y+50) && (this.x+15+shotSize)>character.x && this.x<(character.x+50)){
			return true;
		}else{
			return false;
		}
	}
}

function Squareslow(x,y,speedX,speedY,power){
	this.x = x;
	this.y = y;
	this.speedX = speedX;
	this.speedY = speedY;
	this.power = power;
	this.ShotSize = 80;
	this.collisionMargin = 40;

	this.updatePosition = function(){
		this.x += speedX;
		this.y += speedY;
		if(this.x <= 0){
			speedX *= -1;
		}
		if(this.x >= width_C){
			speedX *= -1;
		}
	}

	this.draw = function(){
		ctx.drawImage(freeze,this.x,this.y,this.ShotSize,this.ShotSize)
	}

	this.isIntersectingChar = function(){
		if((this.y+this.ShotSize-this.collisionMargin) >= character.y-shiftUpY && this.y <= (character.y+50) && (this.x+this.ShotSize-this.collisionMargin)>character.x && this.x<(character.x+50)){
			return true;
		}else{
			return false;
		}
	}
}

function Squareblinder(x,y,speedX,speedY,power){
	this.x = x;
	this.y = y;
	this.speedX = speedX;
	this.speedY = speedY;
	this.power = power;

	this.updatePosition = function(){
		this.x += speedX;
		this.y += speedY;
		if(this.x <= 0){
			speedX *= -1;
		}
		if(this.x >= width_C){
			speedX *= -1;
		}
	}

	this.draw = function(){
		ctx.beginPath();
		ctx.rect(this.x,this.y,shotSize,shotSize);
	    ctx.fillStyle = "black";
	    ctx.fill();
	}

	this.isIntersectingChar = function(){
		if((this.y+shotSize) >= character.y-shiftUpY && this.y <= (character.y+50) && (this.x+	shotSize)>character.x && this.x<(character.x+50)){
			return true;
		}else{
			return false;
		}
	}
}

function SquareInvis(x,y,speedX,speedY,power){
	this.x = x;
	this.y = y;
	this.speedX = speedX;
	this.speedY = speedY;
	this.power = power;
	this.ShotSize = 60;
	this.updatePosition = function(){
		this.x += speedX;
		this.y += speedY;
		if(this.x <= 0){
			speedX *= -1;
		}
		if(this.x >= width_C){
			speedX *= -1;
		}
	}

	this.draw = function(){
		ctx.drawImage(shieldBronze,this.x,this.y,this.ShotSize,this.ShotSize);
		/*ctx.beginPath();
		ctx.rect(this.x,this.y,shotSize,shotSize);
	    ctx.fillStyle = "gray";
	    ctx.fill();*/
	}

	this.isIntersectingChar = function(){
		if((this.y+this.ShotSize) >= character.y-shiftUpY && this.y <= (character.y+50) && (this.x+this.ShotSize)>character.x && this.x<(character.x+50)){
			return true;
		}else{
			return false;
		}
	}
}

function SquareGoldCoin(x,y,speedX,speedY,power){
	this.x = x;
	this.y = y;
	this.speedX = speedX;
	this.speedY = speedY;
	this.power = power;
	this.ShotSize = 60;
	this.collisionMargin = 20;

	this.updatePosition = function(){
		this.x += speedX;
		this.y += speedY;
		if(this.x <= 0){
			speedX *= -1;
		}
		if(this.x >= width_C){
			speedX *= -1;
		}
	}

	this.draw = function(){
		ctx.drawImage(goldCoin,this.x,this.y,this.ShotSize,this.ShotSize);
	}

	this.isIntersectingChar = function(){
		if((this.y+this.ShotSize-this.collisionMargin) >= character.y-shiftUpY && this.y <= (character.y+50) && (this.x+this.ShotSize-this.collisionMargin)>character.x && this.x<(character.x+50)){
			return true;
		}else{
			return false;
		}
	}
}

function SquareSilverCoin(x,y,speedX,speedY,power){
	this.x = x;
	this.y = y;
	this.speedX = speedX;
	this.speedY = speedY;
	this.power = power;
	this.ShotSize = 60;
	this.collisionMargin = 20;

	this.updatePosition = function(){
		this.x += speedX;
		this.y += speedY;
		if(this.x <= 0){
			speedX *= -1;
		}
		if(this.x >= width_C){
			speedX *= -1;
		}
	}

	this.draw = function(){
		ctx.drawImage(silverCoin,this.x,this.y,this.ShotSize,this.ShotSize);
	}

	this.isIntersectingChar = function(){
		if((this.y+this.ShotSize-this.collisionMargin) >= character.y-shiftUpY && this.y <= (character.y+50) && (this.x+this.ShotSize-this.collisionMargin)>character.x && this.x<(character.x+50)){
			return true;
		}else{
			return false;
		}
	}
}

function SquareEmerald(x,y,speedX,speedY,power){
	this.x = x;
	this.y = y;
	this.speedX = speedX;
	this.speedY = speedY;
	this.power = power;
	this.ShotSize = 60;
	this.collisionMargin = 20;

	this.updatePosition = function(){
		this.x += speedX;
		this.y += speedY;
		if(this.x <= 0){
			speedX *= -1;
		}
		if(this.x >= width_C){
			speedX *= -1;
		}
	}

	this.draw = function(){
		ctx.drawImage(emerald,this.x,this.y,this.ShotSize,this.ShotSize);
	}

	this.isIntersectingChar = function(){
		if((this.y+this.ShotSize-this.collisionMargin) >= character.y-shiftUpY && this.y <= (character.y+50) && (this.x+this.ShotSize-this.collisionMargin)>character.x && this.x<(character.x+50)){
			return true;
		}else{
			return false;
		}
	}
}