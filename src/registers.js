module.exports = function(){
  this.lights = [];
  this.solenoids = [];
  this.switches = [];
  
  this.resetLights = function(){
    this.lights = [];
  };
  
  this.resetSolenoids = function(){
    this.solenoids = [];
  };
  
  this.resetSwitches = function(){
    // needed?
    this.switches = [];
  };
};