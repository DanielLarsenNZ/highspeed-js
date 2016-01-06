/*global defineStep, expect, Bumpers */

defineStep(/When the ball hits a bumper: fire (.*) solenoid, sound (.*), score (.*) points/, function (solenoid, points, sound) {
	"define strict";
  
  var mocks = require('./mocks/gamemocks.js');
  var solenoids = new mocks.Solenoids();
  var scores = new mocks.Scores();
  var sounds = new mocks.Sounds();
  
  var bumpers = new Bumpers(solenoids, scores, sounds);
  
  bumpers.hit(0, function(error){
    expect(solenoids.fired).toEqual(solenoid);  
    expect(scores.player1score).toEqual(points);  
    expect(sounds.fired).toEqual(sound);  
  });

});