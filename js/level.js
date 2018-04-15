function Level(environment) {
    this.environment = environment;
    this.platforms = [];
    this.enemies = [];
    this.coins = [];


    this.addPlatform = function(p) {
        this.platforms.push(p);
    }

    this.addEnemy = function(e) {
        this.enemies.push(e);
    }

    this.addCoins = function(c) {
        this.coins.push(c);
    }


    this.moveAndDrawElements = function(ctx) {
        ctx.save();
        this.environment.move();
        this.environment.draw(ctx);
        this.platforms.forEach(platform => {
            platform.draw(ctx);
        });

        this.enemies.forEach((enemy) => {
            enemy.move();
            enemy.draw(ctx);  
        });

        // TODO: move and draw coins
        ctx.restore();
    }


    this.isLevelCompleted = function() {
        return this.coins.length === 0;
    }
}