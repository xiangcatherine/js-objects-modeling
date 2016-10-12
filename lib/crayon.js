'use strict';

const crayon = new Object();
crayon.color = 'blue';
crayon.length = 8;

const getUsedUp = function () {
  crayon.length = crayon.length - 0.5;
};
