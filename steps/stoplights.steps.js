/*global defineStep, expect, Stoplights */
defineStep(/When Stoplight Target is hit, if it is not made, make Target./, 
  function () {
	"define strict";
  
  var mocks = require('./mocks/machinemocks.js');
  var lights = new mocks.Lights();
  var scores = new mocks.Scores();
  var sounds = new mocks.Sounds();
  
  var stoplights = new Stoplights(lights, scores, sounds);
  
  stoplights.made[LOWER_LEFT_STOPLIGHT_GREEN] = false;
  
  stoplights.hit(1, LOWER_LEFT_STOPLIGHT_GREEN, function(error){
    if (error) throw error;
    
    expect(stoplights.made[LOWER_LEFT_STOPLIGHT_GREEN]).toEqual(true);
  });

});

defineStep(/When Stoplight Target is made, light target, add (.*) Bonus Points, sound (.*)./, 
  function (bonusPoints, sound) {
	"define strict";
  
  var mocks = require('./mocks/gamemocks.js');
  var lights = new mocks.Lights();
  var scores = new mocks.Scores();
  var sounds = new mocks.Sounds();
  
  var stoplights = new Stoplights(lights, scores, sounds);
  
  stoplights.make(0, function(error){
    expect(lights[64]).toEqual('on');  
    expect(scores.player1bonus).toEqual(bonusPoints);  
    expect(sounds.fired).toEqual(sound);  
  });

});

defineStep(/When Stoplight Target is made, if all Stoplight Targets are made, advance Ramp Stoplight./, 
  function () {
	"define strict";
  
  var mocks = require('./mocks/gamemocks.js');
  var lights = new mocks.Lights();
  var scores = new mocks.Scores();
  var sounds = new mocks.Sounds();
  
  var stoplights = new Stoplights(lights, scores, sounds);
  stoplights.made[3] = true;
  stoplights.made[6] = true;
  stoplights.ramp = 'green';
  
  stoplights.make(0, function(error){
    expect(stoplights.ramp).toEqual('yellow');  
  });

});