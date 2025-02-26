let player1 = new Player(30,100,100,"red");

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  // Call the function to draw the player.
  drawPlayer(player1);
  // Call the function to move the player.
  movePlayer(player1);
}
