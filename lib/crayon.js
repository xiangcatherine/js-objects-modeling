'use strict';

const crayon = {
  color: 'blue',
  lengthInCM: 8,
  getUsedUp: function () {
    crayon.length = crayon.length - 0.5;
    return "The new length is " + crayon.lengthInCM;
  }
};
