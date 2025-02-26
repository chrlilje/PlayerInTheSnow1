let player1 = new Player(30,100,100,"red",65,68,87,83);

let player2 = new Player(30,200,200,"blue",37,39,38,40);

let asteroidArray = [];

function setup() {
  createCanvas(400, 400);
  // Create 5 asteroid and add them to the array.
  for (let i = 0; i < 5; i++) {
    let asteroid = new Asteroid(30, random(0, width), random(0, height), random(-1, 1), random(-1, 1));
    // ??? Rembember to make sure the asteroid is not on top of the player.
    asteroidArray.push(asteroid);
  }
}

function draw() {
  background(220);
  // Call the function to draw the player.
  drawPlayer(player1);
  drawPlayer(player2);
  // Call the function to move the player.
  movePlayer(player1);
  movePlayer(player2);

  // Call the function to draw all the asteroids.
  drawAllAsteroid();
  // Move all the asteroids.
  for(let asteroid of asteroidArray){
    asteroid.move();
  }
}
