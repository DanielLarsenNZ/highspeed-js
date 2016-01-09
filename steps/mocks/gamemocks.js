module.exports.Lights = function () {
  "define strict";
  
};

module.exports.Scores = function () {
  "define strict";
  this.scores = [0,0,0,0,0];
  
  
  //* adds score to the current player's score */
  this.add = function(player, score, callback){
    console.log("gamemocks.js.Scores.add", player, score);
    this.scores[player] += score;
    callback(null);    
  };
  
  this.getCurrentScore = function(player){
    return this.scores[player];
  }; 
  
};

module.exports.Sounds = function () {
  "define strict";
  
  this.played = [];
  
  this.play = function(sound, callback){
    console.log("gamemocks.js.Sounds.play", sound);
    this.played.push(sound);
    callback(null);
  };
  
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