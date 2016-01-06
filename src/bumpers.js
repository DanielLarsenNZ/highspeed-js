// constants define solenoid numbers
const BUMPER_1 = 24;
const BUMPER_2 = 25;
const BUMPER_3 = 26;


// Ummm, aren't Bumper solenoids hardwired?
var Bumpers = function(solenoids, scores, sounds){
  this.solenoids = solenoids;
  this.scores = scores;
  this.sounds = sounds;
  
  this.hit = function(number){
    var solenoid = 0;
    
    switch (number){
      case 1: solenoid = BUMPER_1; break;
      case 2: solenoid = BUMPER_2; break;
      case 3: solenoid = BUMPER_3; break;
      default: throw number + " is not a valid Bumper number. Try 1, 2 or 3";
    }
    
    solenoids.fire(solenoid);
  };
};