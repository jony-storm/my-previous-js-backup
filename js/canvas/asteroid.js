myCanvas.width = '500'
myCanvas.height = '500'
var c = myCanvas.getContext('2d')

var canvasW = myCanvas.width
var canvasH = myCanvas.height

var Asteroid = function(x, y, radius) {
	this.x = x
	this.y = y
	this.radius = radius
	this.reverseX = true
	this.reverseY = true
}

var asteroids = new Array()

for(let i = 0; i < 10; i++) {
	var x = (Math.random() * canvasW)
	var y = (Math.random() * canvasH)
	var radius = 10 + Math.random() * 20
	asteroids.push(new Asteroid(x, y, radius))
}

var start = true
function start_animate() {
	c.clearRect(0, 0, canvasW, canvasH)
	c.fillStyle = 'rgb(255, 255, 255)'

	var asteroidsLen = asteroids.length

	for(let i = 0; i < asteroidsLen; i++) {
		var tmpAsteroid = asteroids[i]
		if (!tmpAsteroid.reverseX) {
			tmpAsteroid.x += 2;
		} else {
			tmpAsteroid.x -= 2;
		};

		if (!tmpAsteroid.reverseY) {
			tmpAsteroid.y += 1;
		} else {
			tmpAsteroid.y -= 1;
		};

		c.beginPath()
		c.arc(tmpAsteroid.x, tmpAsteroid.y, tmpAsteroid.radius, 0, Math.PI * 2, false)
		c.fill()
		c.closePath()

		if(tmpAsteroid.x < 0) {
			tmpAsteroid.reverseX = false
		} else if(tmpAsteroid.x + tmpAsteroid.r > canvasW) {
			tmpAsteroid.reverseX = true
		}

		if(tmpAsteroid.y < 0) {
			tmpAsteroid.reverseY = false
		} else if(tmpAsteroid.x + tmpAsteroid.r > canvasH) {
			tmpAsteroid.reverseY = true
		}
	}

	if(start == true) {
		setTimeout(start_animate, 33)
	} else {
		start = true
	}
}
start_animate()
function stop_animate() {
	if(start == true) {
		start = false
	} 
}




/*if(tmpAsteroid.x < 0) {
			tmpAsteroid.reverseX = false
		} else if(tmpAsteroid.x + tmpAsteroid.r > canvasW) {
			tmpAsteroid.reverseX = true
		}

		if(tmpAsteroid.y < 0) {
			tmpAsteroid.reverseY = false
		} else if(tmpAsteroid.x + tmpAsteroid.r > canvasH) {
			tmpAsteroid.reverseY = true
		}
if(tmpAsteroid.x < 0) {
			tmpAsteroid.reverseX = false
		} else if(tmpAsteroid.x + tmpAsteroid.r > canvasW) {
			tmpAsteroid.reverseX = true
		}

		if(tmpAsteroid.y < 0) {
			tmpAsteroid.reverseY = false
		} else if(tmpAsteroid.y + tmpAsteroid.r > canvasH) {
			tmpAsteroid.reverseY = true
		}*/