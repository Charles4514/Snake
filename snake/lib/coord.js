(function (root) {
  var SnakeGame = root.SnakeGame = (root.SnakeGame || {});

  var Coor = SnakeGame.Coord = function(x, y){
    this.x = x;
    this.y = y;
  }

  Coord.prototype.plus = function(otherCoord) {
    var x = this.x + otherCoord.x;
    var y = this.y + otherCoord.y;
    return new Coord(x,y);
  };

})(this);