//stars with 2D vectors by Esme Hotston Moore (Accessed 01/21/23 via https://openprocessing.org/sketch/1139794)

function setup() {
	createCanvas(windowWidth, windowHeight);
	resetBackground()
	defineStars();
}

function resetBackground(){background(0);}

const stars = []


function draw() {
	// ellipse(mouseX, mouseY, 20, 20);
	// console.log(stars)
	resetBackground()
	moveStars()
	drawStars()
}

function defineStars() {
	const numberOfStars = 500
	for (let i = 0; i < numberOfStars; i++) {
		// x and y show the starting coords, z is for the distance and so determines the size
		const xPos = getRandomX()
		const yPos = getRandomY()
		const zPos = getRandomZ()
		const vectorPosition = createVector(xPos, yPos, zPos)
		const newStar = {
			pos: vectorPosition,
			limitedZ: map(zPos, 0, width, 1, 10)
		}
		stars.push(newStar)
	}

}

const getRandomY = () => random(0, height)
const getRandomX = () => random(0, width)
const getRandomZ = () => random(0,width)

function applyToAllStars(functionName) {
	for (let star of stars) {
		functionName(star)
	}
}

function moveStars() {
	applyToAllStars(moveStar)
}

function drawStars() {
	applyToAllStars(drawStar)
}

function moveStar(star) {

	const speedX = map(mouseX, 0, width, -star.limitedZ, star.limitedZ)
	const speedY = map(mouseY, 0, height, -star.limitedZ, star.limitedZ)
	const vectorMovement = createVector(speedX/2.5, speedY/2.5, 0);
	const nextVectorPosition = p5.Vector.add(star.pos, vectorMovement);
	star.pos = nextVectorPosition
	
	replaceStarIfFallsOff(star)
	

}

function replaceStarIfFallsOff(star){
	// put stars back to beginning when they fall off RHS
	if (star.pos.x > width) {
		star.pos.x = 0
		star.pos.y = getRandomY()
	}
	// put stars back to beginning when they fall off LHS
	if (star.pos.x < 0) {
		star.pos.x = width
		star.pos.y = getRandomY()
	}
	// put stars back to beginning when they fall off bottom
	if (star.pos.y > height) {
		star.pos.y = 0
		star.pos.x = getRandomX()
	}
	// put stars back to beginning when they fall off top
	if (star.pos.y < 0) {
		star.pos.y = height
		star.pos.x = getRandomX()
	}
}

function drawStar(star) {
	circle(star.pos.x, star.pos.y, star.limitedZ)

  
}