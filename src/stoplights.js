const LOWER_LEFT_STOPLIGHT_GREEN = 0;
const LOWER_LEFT_STOPLIGHT_YELLOW = 1;
const LOWER_LEFT_STOPLIGHT_RED = 2;

const UPPER_LEFT_STOPLIGHT_GREEN = 3;
const UPPER_LEFT_STOPLIGHT_YELLOW = 4;
const UPPER_LEFT_STOPLIGHT_RED = 5;

const RIGHT_STOPLIGHT_GREEN = 6;
const RIGHT_STOPLIGHT_YELLOW = 7;
const RIGHT_STOPLIGHT_RED = 8;

var Stoplights = function(){
  this.made = [false, false, false, false, false, false, false, false];
  
  //* stoplight switch is hit to make a target */
  this.hit = function(player, stoplight, callback){
    this.made[stoplight] = true;
    
    callback(null);
  };
};