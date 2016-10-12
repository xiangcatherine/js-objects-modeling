'use strict';

const crayon = {
  color: 'blue',
  lengthInCM: 8
};

const getUsedUp = function () {
  crayon.length = crayon.length - 0.5;
};
