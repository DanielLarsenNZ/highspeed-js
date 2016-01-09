/*global defineStep, expect, Bumpers */

defineStep(/When the ball hits a bumper: fire solenoid (.*), sound (.*), score (.*) points/, function (solenoid, sound, points) {
	"define strict";
    
  var mocks = require('./mocks/gamemocks.js');
  var solenoids = new mocks.Solenoids();
  var scores = new mocks.Scores();
  var sounds = new mocks.Sounds();
  
  const player = 1;
  
  var bumpers = new Bumpers(solenoids, scores, sounds);
  
  bumpers.hit(1, player, function(error){
    if (error) throw error;
    expect(solenoids.fired[0]).toEqual(solenoid);  
    expect(sounds.played[0]).toEqual(sound);
    expect(scores.getCurrentScore(player)).toEqual(points);
  });

});