/// <reference path="../lib/phaser.d.ts"/>
var SimpleGame = (function () {
    function SimpleGame() {
        this.game = new Phaser.Game(800, 600, Phaser.AUTO, "content", this);
    }
    SimpleGame.prototype.preload = function () {
        this.game.load.image("logo", "images/phaser-logo-small.png");
    };
    SimpleGame.prototype.create = function () {
        this.logo = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, "logo");
        this.logo.anchor.setTo(0.5, 0.5);
        this.cursors = this.game.input.keyboard.createCursorKeys();
    };
    SimpleGame.prototype.update = function () {
        this.game.input.update();
        if (this.cursors.down.isDown)
            this.logo.position.y++;
        if (this.cursors.up.isDown)
            this.logo.position.y--;
        if (this.cursors.left.isDown)
            this.logo.position.x--;
        if (this.cursors.right.isDown)
            this.logo.position.x++;
    };
    return SimpleGame;
}());
window.onload = function () {
    var game = new SimpleGame();
};
//# sourceMappingURL=app.js.map