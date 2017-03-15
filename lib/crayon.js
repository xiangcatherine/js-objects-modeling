let crayon = new Object();

crayon.color = 'blue';
crayon.lengthInCM = 8;
crayon.getUsedUp = function() {
  crayon.lengthInCM -= 0.5;
}
