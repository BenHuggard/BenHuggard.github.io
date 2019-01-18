/*var gameCanvas = {
    canvas : document.getElementById("gameCanvas")
    start : function() {
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
    }
}
*/
var player;

function startGame() {
    document.getElementById("nameHeading").innerHTML = "dsyg";
}
    /*
    //gameCanvas.start();
    //player = piece(561.5, 250, "green", 25, 25);

}

function piece(x, y, color, width, height) {
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    ctx = gameCanvas.context;
    ctx.fillStyle = color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
}