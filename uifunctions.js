// Make a p5.js function that moves the palyer with wasd keys
function movePlayer(player){
    if (keyIsDown(87)){
        player.y -= 1;
    }
    if (keyIsDown(83)){
        player.y += 1;
    }
    if (keyIsDown(65)){
        player.x -= 1;
    }
    if (keyIsDown(68)){
        player.x += 1;
    }
}