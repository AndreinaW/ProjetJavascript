
function Coin(pos_x, pos_y,extra_space_left,extra_space_right) {
    let SPRITE_WIDTH = 36;
    let SPRITE_HEIGHT = 36;
    let NB_POSTURES = 1;
    let NB_FRAMES_PER_POSTURE = 6;

    let COIN_SRC = {
        star_coin: "images/coins.png"
    }

    this.pos_x = pos_x;
    this.pos_y = pos_y;
    this.width = SPRITE_WIDTH;
    this.height = SPRITE_HEIGHT;
    /*this.speedX = 0;
    this.speedY = 0;
    this.move_speed = 4;*/
    

    // Sprites attributes
    this.sprites = [];
    this.spritesheet = new Image();
    this.spritesheet.src = COIN_SRC.star_coin;

    this.extra_space_left = extra_space_left;
    this.extra_space_right = extra_space_right;

    this.draw = function(ctx) {
        ctx.save();
        this.sprites[0].draw(ctx, this.pos_x, this.pos_y,1);
        ctx.restore();
    }


    /*this.move = function() 
    {            
        this.pos_x += this.speedX;
        this.pos_y += this.speedY;
    }*/


    this.initSprites = function() {   
        // sprite extraction
        for(let i = 0; i < NB_POSTURES ; i++){
            sprite = new Sprite();
            sprite.extractSprites(this.spritesheet, NB_POSTURES, (i+1), NB_FRAMES_PER_POSTURE, SPRITE_WIDTH, SPRITE_HEIGHT,
                                    this.extra_space_left,this.extra_space_left);
            sprite.setNbImagesPerSecond(10);
            this.sprites[i] = sprite;
        }
    }
}