/*global defineStep, expect, Stoplights */
defineStep(/When Stoplight Target is hit, if it is not made, make Target./, 
  function () {
	"define strict";
  
  var mocks = require('./mocks/stoplightmocks.js');
  var lights = new mocks.MockLights();
  var scores = new mocks.MockScores();
  var sounds = new mocks.MockSounds();
  
  var stoplights = new Stoplights(lights, scores, sounds);
  
  stoplights.made[0] = false;
  
  stoplights.hit(0, function(error){
    expect(stoplights.made[0]).toEqual(true);
  });

});

defineStep(/When Stoplight Target is made, light target, add (.*) Bonus Points, sound (.*)./, 
  function (bonusPoints, sound) {
	"define strict";
  
  var mocks = require('./mocks/stoplightmocks.js');
  var lights = new mocks.MockLights();
  var scores = new mocks.MockScores();
  var sounds = new mocks.MockSounds();
  
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
  
  var mocks = require('./mocks/stoplightmocks.js');
  var lights = new mocks.MockLights();
  var scores = new mocks.MockScores();
  var sounds = new mocks.MockSounds();
  
  var stoplights = new Stoplights(lights, scores, sounds);
  stoplights.made[3] = true;
  stoplights.made[6] = true;
  stoplights.ramp = 'green';
  
  stoplights.make(0, function(error){
    expect(stoplights.ramp).toEqual('yellow');  
  });

});