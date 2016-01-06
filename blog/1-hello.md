# Hello

* I own an old 80's pinball machine called High Speed.
* It has broken down with a faulty MPU. A replacement is ~ US$350.
* I thought it would be interesting to replace the 6800 based MPU with a Raspberry 
  Pi and a [custom Driver Board].
* The Driver Board is a Parallel IO board which interfaces with the Raspberry Pi 
  using I2C protocol via its GPIO. @marktbaldridge has already [proved this concept].
* Rather than emulate the 6800 I thought it would be interesting to write the game 
  code from scratch.
* Rather than use Python I also thought it would be interesting to code the game 
  in JavaScript and see what the game performance is like using async programming and
  Node.js.
* Rather than reverse engineer the 6800 machine code I thought I would Code the game
  from the [Rules List] which is well known (but not perfectly documented). 
* This _seems like_ a good opportunity to use SBE techniques, TDD and the [DaSpec]
  library.
  
Wish me luck!

[custom Driver Board]: https://easyeda.com/editor#id=GqI0UOVrlD
[proved this concept]: http://www.markbaldridge.com/?author=1&paged=3
[Rules List]: http://pinball.org/rules/highspeed.html
[DaSpec]: http://daspec.com/
