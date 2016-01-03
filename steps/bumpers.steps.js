/*global defineStep, expect, Bumpers */

defineStep(/When the ball hits a bumper: fire (.*) solenoid, score (.*) points, sound (.*)/, function (solenoid, points, sound) {
	"define strict";
  
  var mocks = require('./mocks/bumpermocks.js');
  var solenoids = new mocks.MockSolenoids();
  var scores = new mocks.MockScores();
  var sounds = new mocks.MockSounds();
  var bumpers = new Bumpers(solenoids, scores, sounds);
  
  bumpers.hit(0, function(error){
    expect(solenoids.fired).toEqual(solenoid);  
    expect(scores.player1score).toEqual(points);  
    expect(sounds.fired).toEqual(sound);  
  });

});