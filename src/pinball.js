/** A pinball game. 
 *  * Sets up the machine  
 *  * Starts test/attract mode
 *  * Waits for start button
 *  * Starts a game.
 * */
module.exports = function(registers, pio){
    
  // get a machine
  var machine = require('.\machine.js');
  var Machine = new machine(registers);
  
  // start the pio
  var pioSettings = {
      lightsBussClockRateMs: (1000/60),
      SolenoidBussClockRateMs: 10,
      SwitchBussScanRateMs: 10      
    };
  
  pio.start(registers, pioSettings, function(err){
    if (err){
      console.log(err);
      throw err;
    }
    
    // test
    Machine.Lights.test();
  });
  
};