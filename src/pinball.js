/** A pinball game. 
 *  * Sets up the machine  
 *  * Starts test/attract mode
 *  * Waits for start button
 *  * Starts a game.
 * */
module.exports = function(pio){
  
  // get a register
  var register = [];
  
  // get a machine
  var machine = require('.\machine.js');
  var Machine = new machine(register);
  
  // start the pio
  pio.start(register, 1000/30);
  
  // test
  Machine.Lights.test();
  
};