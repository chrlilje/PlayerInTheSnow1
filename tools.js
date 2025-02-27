// Make a new Asteroid object, and add it to the asteroidArray.
// The asteroid must have a position and a random velocity.
/**
 * 
 * @param {*} x 
 * @param {*} y 
 * @param {*} direction 
 */
function makeNewAsteroid(x,y, vx, vy){
    // Make a new asteroid object.

    let asteroid = new Asteroid(30, x, y, vx, vy);
    // Add the asteroid to the asteroidArray.
    asteroidArray.push(asteroid);

}