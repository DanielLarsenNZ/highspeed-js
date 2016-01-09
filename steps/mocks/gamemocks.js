module.exports.Lights = function () {
  "define strict";
  
};

module.exports.Scores = function () {
  "define strict";
  
};

module.exports.Sounds = function () {
  "define strict";
  
};

module.exports.Solenoids = function () {
  "define strict";
  
  this.fired = [];
  
  this.fire = function(number, callback){
    console.log("gamemocks.js.Solenoids.fire", number);
    this.fired.push(number);
    callback(null);
  };
  
};