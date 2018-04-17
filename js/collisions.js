function testCollisions() {
    testWallCollisionsPlayer(player);
    //testWallCollisionsEnemies(getCurrentLevel().enemies);
    testCollisionsPlatforms(player, getCurrentLevel().platforms);
}

function testWallCollisions(r) {
    // right wall
    if((r.pos_x + r.width) > canvas.width) {
        r.speedX = -r.speedX;
        r.pos_x = canvas.width - r.width;
    }
    // left wall
    else if((r.pos_x) < 0){
        r.speedX = -r.speedX;
        r.pos_x = 0;
    }

    // down wall
    if((r.pos_y + r.height) > canvas.height) {
        r.speedY = -r.speedY;
        r.pos_y = canvas.height - r.height;
    }
    // up wall
    else if(r.pos_y < 0){
        r.speedY = -r.speedY;
        r.pos_y = 0;
    }
}


function testWallCollisionsEnemies(enemies) {
    enemies.forEach((enemy) => {
        testWallCollisions(enemy);
    });   
}


function testWallCollisionsPlayer(player) {
    // right wall
    if((player.pos_x + player.width) > canvas.width) {
        player.speedX = 0;
        player.pos_x = canvas.width - player.width;
    }
    // left wall
    else if((player.pos_x) < 0){
        player.speedX = 0;
        player.pos_x = 0;
    }

    // down wall
    if((player.pos_y + player.height) > canvas.height) {
        player.speedY = 0;
        player.pos_y = canvas.height - player.height;
        player.on_the_ground = true;
        player.jumped = false;    
    }
    // up wall
    else if(player.pos_y < 0){
        player.speedY = 0;
        player.pos_y = 0;
    }
}


function testCollisionsPlatforms(r, platforms){
    platforms.forEach(platform => {

        if(r.pos_x + r.width > platform.posX &&
            (r.pos_x < platform.posX + platform.width )&&
            ((r.pos_y + r.height) > platform.posY)){
                if(r.pos_y < platform.posY)
                {
                    r.speedY = 0;
                    r.speedY = -r.speedY;
                    r.pos_y = platform.posY - r.height ;
                    player.on_the_ground = true;
                    player.jumped = false;    
                }
                if(r.pos_y < platform.posY + platform.height/2){
                    r.speedY = 0;
                    r.speedY = -r.speedY;
                    player.jumped = false;
                }
            }
    });
}


function testCollisionPlayerEnemies(p, e){
    var crash = true;
    //enemy character collision function
    if((p.pos_y + p.height < e.pos_y ) ||
        (p.pos_y > e.pos_y + e.height) ||
        (p.pos_x > e.pos_x + e.width) ||
        (p.pos_x + p.width < e.pos_x)){
            crash = false;
        }
    else{
        e.speedX = -e.speedX;
        if(e.pos_x < p.pos_x + p.width)
            p.pos_x = e.pos_x + e.width + 2*p.width;
        else
            p.pos_x = e.pos_x - 2*p.width;
    }
        return crash;
}

function testJumpOnEnemy(p, e){
    var jumpedOn = false;
    //player bottom collision with enemy top side
    if((p.pos_y + p.height > e.pos_y -5)&&
        (p.pos_y + p.height < e.pos_y + e.height/2)&&
        (p.pos_x + p.width > e.pos_x)&&
        (p.pos_x < e.pos_x + e.width)){
            p.pos_y = e.pos_y - p.height - 10;
            e.pos_x = p.pos_x + p.width + e.width;
            jumpedOn = true;
        }
    return jumpedOn;
}