/**
 * A function that draws a player. The player is just a circle.
 * We code as classic p5.js
 */
function drawPlayer(player) {
    fill(player.color);
    ellipse(player.x, player.y, player.size*1.3, player.size);
}
