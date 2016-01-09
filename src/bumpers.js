// constants define solenoid numbers
const BUMPER_1_SOLENOID = 19; // Right Jet Bumper
const BUMPER_2_SOLENOID = 20; // Lower Left Jet Bumper
const BUMPER_3_SOLENOID = 21; // Upper Left Jet Bumper


var Bumpers = function(solenoids, scores, sounds){
  this.solenoids = solenoids;
  this.scores = scores;
  this.sounds = sounds;
  
  this.hit = function(number, player, callback){
    console.log("Bumpers.hit number = %d, player = %d", number, player);

    var solenoid = 0;
    
    switch (number){
      case 1: solenoid = BUMPER_1_SOLENOID; break;
      case 2: solenoid = BUMPER_2_SOLENOID; break;
      case 3: solenoid = BUMPER_3_SOLENOID; break;
      default: 
        callback(new Error(number + " is not a valid Bumper number. Try 1, 2 or 3"));
        return;
    }
    
    solenoids.fire(solenoid, function (error){
      if (error) callback(error);
      scores.add(player, 500, function (error){
        if (error) callback(error);
        sounds.play("bumper.wav", function(error){
          if (error) callback(error);
          callback(null);
        });  
      });  
    });
  };
};
