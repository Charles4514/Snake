(function (root) {
  var SnakeGame = root.SnakeGame = (root.SnakeGame || {});

  var Snake = SnakeGame.Snake = function(dir, segments){
    this.dir = dir;
    this.segments = segments; //array of coordinates
  };

  Snake.DIRECTIONS = ["N", "E", "S", "W"];

  Snake.prototype.move = function(){

  };

  Snake.prototype.turn = function(dir){

  };

})(this);