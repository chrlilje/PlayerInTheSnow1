// A class to hanle a player. 
// It has a size, a x, y position and a color.

/**
 * A class to handle a player.
 */
class Player {
    /**
     * Constructor for the player class.
     * @param {number} size - The size of the player.
     * @param {number} x - The x position of the player.
     * @param {number} y - The y position of the player.
     * @param {string} color - The color of the player. Ex: "red"
     * @param {number} moveleft - The key code for moving left. Ex: 65
     * @param {number} moveright - The key code for moving right. Ex: 68
     * @param {number} moveup - The key code for moving up. Ex: 87
     * @param {number} movedown - The key code for moving down. Ex: 83
     */
    constructor(size, x, y, color, moveleft, moveright, moveup, movedown) {
        this.size = size;
        this.x = x;
        this.y = y;
        this.color = color;
        this.moveleft = moveleft;
        this.moveright = moveright;
        this.moveup = moveup;
        this.movedown = movedown;
    }

 }