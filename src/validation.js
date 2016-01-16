function validatePlayer(player){
  if (player === PLAYER_1 || player === PLAYER_2 || player === PLAYER_3 || player === PLAYER_4) return;
  var type = typeof player;
  throw new Error (player + " (" + type + ") is not a valid player number. Try PLAYER_1, PLAYER_2, PLAYER_3 or PLAYER_4.");
}
