(function (root) {
  var SnakeGame = root.SnakeGame = (root.SnakeGame || {});

  var Coord = SnakeGame.Coord = function(x, y){
    this.x = x;
    this.y = y;
  }

  Coord.prototype.plus = function(otherCoord) {
    var x = this.x + otherCoord.x;
    var y = this.y + otherCoord.y;
    return new SnakeGame.Coord(x,y);
  };

})(this);