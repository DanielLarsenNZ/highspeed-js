/*global defineStep, expect */

defineStep(/These are valid numbers for specifying a player:/, function (players) {
	"define strict";
  
  players.items.forEach(function(player){
    validatePlayer(eval(player));
    expect(player).toEqual(player);
  });

});

defineStep(/These are not valid numbers:/, function (players) {
	"define strict";
  
  var isPlayerValid = function(player){
    try{
      // validatePlayer() returns undefined if valid, throws if invalid.
      validatePlayer(eval(player));
      return true;
    }
    catch(ex){
      return false;
    }
  };
  
  players.items.forEach(function(player){
    //expect(validatePlayer(eval(player))).toThrow();
    expect(isPlayerValid(player)).toEqual(false);
  });

});