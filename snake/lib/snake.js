(function (root) {
  var SnakeGame = root.SnakeGame = (root.SnakeGame || {});

  var Snake = SnakeGame.Snake = function(dir, segments){
    this.dir = dir;
    this.segments = segments; //array of coordinates
  };

  Snake.DIRECTIONS = ["N", "E", "S", "W"];

  Snake.prototype.move = function(){
    var dCoord;

    switch(this.dir) {
      case "N":
        dCoord = new SnakeGame.Coord(0, -1);
        break;
      case "E":
        dCoord = new SnakeGame.Coord(1, 0);
        break;
      case "S":
        dCoord = new SnakeGame.Coord(0, 1);
        break;
      case "W":
        dCoord = new SnakeGame.Coord(-1, 0);
        break;
      default:
        break;
    }


    var addedCoord = this.segments[this.segments.length - 1].plus(dCoord);

    var new_segs = this.segments.slice(1).concat([addedCoord]);
    this.segments = new_segs;

  };

  Snake.prototype.turn = function(dir){
    this.dir = dir;
  };

})(this);