/** Coordinates machine functions, devoid of any gameplay or game-machine specific code.
 * e.g.
 *    machine.Lights.on(0);
 *    machine.Lights.off(0);
 *    machine.Scores;
 *    machine.Sounds;
 *    machine.Solenoids;
 *    machine.Switches
 */
const PLAYER_1 = 0;
const PLAYER_2 = 1;
const PLAYER_3 = 2;
const PLAYER_4 = 3;
const REGISTER_LIGHTS = 0;

module.exports = function (settings, registers) {
  this.settings = settings;
  this.registers = registers;
  
  this.Lights = lights;
  this.Scores = scores;
  this.Sounds = sounds;
  this.Solenoids = solenoids;
  
  var defaultSettings = {
    lightBussSize: 64
  };
  
  
  var lights = function () {
    "define strict";
    
    this.on = function(number){
      //
      this.Registers[REGISTER_LIGHTS][number] = 1;
    };
    
    this.off = function(number){
      //
      this.Registers[REGISTER_LIGHTS][number] = 0;
    }
    
    this.allOff = function(){
      this.Registers[REGISTER_LIGHTS] = [];
    };
    
    this.test = function(){
      /** cycles through all lights */
      this.allOff();
      
      var lightNumber = 0;
      var timer = setInterval(function(){
        if (lightNumber > (settings.lightBussSize || defaultSettings.lightBussSize)) {
          // start at the first light again.
          this.allOff();
          lightNumber = 0;
        }

        if (lightNumber > 0) this.off(lightNumber - 1);
        this.on(lightNumber);
        lightNumber++;
      }, 1000);
    };
  };

  var scores = function () {
    "define strict";
    //  
    
    this.add = function(player, score, callback){
      console.log("machine.Scores.add", player, score);
      throw "not implemented";
    };
    
    this.getCurrentScore = function(player){
      console.log("machine.Scores.getCurrentScore", player);
      throw "not implemented";
    }; 

  };

  var sounds = function () {
    "define strict";
    //
    
    this.play = function(sound, callback){
      console.log("machine.Sounds.play", sound);
      throw "not implemented";
      //callback(null);
    };

  };

  var solenoids = function () {
    "define strict";
    //  
    
    this.fire = function(number, callback){
      console.log("machine.Solenoids.fire", number);
      throw "not implemented";
      //callback(null);
    };

  };

}

