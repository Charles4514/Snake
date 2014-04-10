(function (root) {
  var Hanoi = root.Hanoi = (root.Hanoi || {});

  var TowerUI = Hanoi.TowerUI = function(game){
    var ui = this;

    this.game = game;
    this.fromTower = null;
    this.toTower = null;


    $(document).ready(function() {
      $('section').on('click', 'ul', function(){
        if (ui.fromTower === null){
          var $from = $(event.target);
          var $fromId = $from.attr('id');

          ui.fromTower = parseInt($fromId);
          $from.toggleClass("highlight");
        } else {
          var $to = $(event.target);
          var $toId = $to.attr('id');

          ui.game.takeTurn()



         //render here
        }
      })
    });
  }

  TowerUI.prototype.render = function() {

  };

})(this);