/**
 * Define an asteroid class - we want so have a size, and x, y, and vx, vy as velocity
 * 
 */
class Asteroid {
    /**
     * Constructor for the asteroid class.
     * @param {number} size - The size of the asteroid.
     * @param {number} x - The x position of the asteroid.
     * @param {number} y - The y position of the asteroid.
     * @param {number} vx - The x velocity of the asteroid.
     * @param {number} vy - The y velocity of the asteroid.
     */
    constructor(size, x, y, vx, vy) {
        this.size = size;
        this.x = x;
        this.y = y;
        this.vx = vx;
        this.vy = vy;
    }
    /**
     * A function that moves the asteroid.
     */
    move() {
        this.x += this.vx;
        this.y += this.vy;
        // If the asteroid hits the edges - bounce back.
        // Make separate tests  to check if the asteroid hits the edges.
        // Make an if statement for each case 

        if (this.x > width) {
            this.vx = -Math.abs(this.vx);
            // Set the x position inside the canvas
            this.x = 2 * width - this.x;
            makeNewAsteroid(this.x, this.y,random(-1,-2),random(-1,1));
        }
        if (this.x < 0) {
            this.vx = Math.abs(this.vx);
           // Mirror the x position about the edge
           this.x = 0 - this.x; 
           makeNewAsteroid(this.x, this.y,random(1,2),random(-1,1));

        }
        if (this.y > height) {
            this.vy = -Math.abs(this.vy);
            // Mirror about the y = height line
            this.y = 2* height - this.y;
            makeNewAsteroid(this.x, this.y,random(-1,1),random(-2,-1));
        }
        if (this.y < 0) {
            this.vy = Math.abs(this.vy);
            // Mirror about the y= 0 line
            this.y = 0 - this.y;
            makeNewAsteroid(this.x, this.y,random(-1,1),random(1,2));
        }



    }
}