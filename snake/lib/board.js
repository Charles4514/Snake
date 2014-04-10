(function (root) {
  var SnakeGame = root.SnakeGame = (root.SnakeGame || {});

  var Board = SnakeGame.Board = function(len, wid, snake){
    var temp = [];

    _.times(len, function(){
      temp.push(new Array(wid));
    });

    this.board = temp;
    this.snake = snake;
    this.apple = new SnakeGame.Apple(
      SnakeGame.Coord.random(),
      this
    );
  }

  Board.prototype.newApple = function(){
    this.apple = new SnakeGame.Apple( SnakeGame.Coord.random(), this );
  };

  Board.prototype.render = function(){
    var boardStr = "";
    var thatBoard = this.board;
    var thatSnake = this.snake;
    var thatApple = this.apple;
    // var xs = [];
    // var ys = [];
    //
    // thatSnake.segments.forEach(function(el, i){
    //   xs.push(el.x);
    //   ys.push(el.y);
    // })

    // console.log("xs", xs);
    // console.log("ys", ys);

    for (var i = 0; i < thatBoard.length; i++) {
      for (var j = 0; j < thatBoard[i].length; j++) {
        var currentCoord = new SnakeGame.Coord(j, i);

        if ( thatSnake.includesSegment(currentCoord) ){
          boardStr += "&nbsp;*&nbsp;";
        } else if ( thatApple.coord.isEqualTo(currentCoord) ){
          boardStr += "&nbsp;*&nbsp;";
        } else {
          boardStr += "&nbsp;_&nbsp;";
        };

      };
     boardStr += "<br>";
    };

    $("body").html(boardStr);
  };

})(this);