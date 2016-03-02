$(document).ready(function () {
  console.log('app ready');
  var KEYS = {
    LEFT: 37,
    UP: 38,
    RIGHT: 39,
    DOWN: 40,
    ENTER: 13
  };
  var lastKey = null;
  $('#body').keydown(function (e) {
    console.log(e);
    if(lastKey === e.keyCode) return;
    lastKey = e.keyCode;

    if(e.keyCode === KEYS.LEFT){
      $.ajax({url: '/turret/left'});
    }
    if(e.keyCode === KEYS.UP){
      $.ajax({url: '/turret/up'});
    }
    if(e.keyCode === KEYS.RIGHT){
      $.ajax({url: '/turret/right'});
    }
    if(e.keyCode === KEYS.DOWN){
      $.ajax({url: '/turret/down'});
    }
    if(e.keyCode === KEYS.ENTER){
      $.ajax({url: '/turret/fire'});
    }
  });

  $('#body').keyup(function (e) {
    lastKey = null;
    if(e.keyCode === KEYS.ENTER)
      return;
    $.ajax({url: '/turret/stop'});

  })
});