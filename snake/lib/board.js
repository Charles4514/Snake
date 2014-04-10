(function (root) {
  var SnakeGame = root.SnakeGame = (root.SnakeGame || {});

  var Board = SnakeGame.Board = function(len, wid, snake){
    var temp = [];

    _.times(len, function(){
      temp.push(new Array(wid));
    });

    this.board = temp;
    this.snake = snake; //put anything in the board
  }

  Board.prototype.render = function(){
    var boardStr = "";
    var thatBoard = this.board;
    var thatSnake = this.snake;
    var xs = [];
    var ys = [];

    thatSnake.segments.forEach(function(el, i){
      xs.push(el.x);
      ys.push(el.y);
    })

    for (var i = 0; i < thatBoard.length; i++) {
      for (var j = 0; j < thatBoard[i].length; j++) {
        // debugger
        if((xs.indexOf(j) === -1) || (ys.indexOf(i) === -1)){
          boardStr += "&nbsp;_&nbsp;";
        } else {
          boardStr += "&nbsp;*&nbsp;";
        }
      };
      boardStr += "<br>";
    };

    $("body").html(boardStr);
  };

})(this);