// Make a p5.js function that moves the palyer with wasd keys
function movePlayer(player){
    if (keyIsDown(player.moveup)){
        player.y -= 1;
    }
    if (keyIsDown(player.movedown)){
        player.y += 1;
    }
    if (keyIsDown(player.moveleft)){
        player.x -= 1;
    }
    if (keyIsDown(player.moveright)){
        player.x += 1;
    }
}