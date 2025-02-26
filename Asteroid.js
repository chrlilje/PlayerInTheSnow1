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
        if (this.x > width || this.x < 0) {
            this.vx = -this.vx;
        }
        if (this.y > height || this.y < 0) {
            this.vy = -this.vy;
        }
    }
}