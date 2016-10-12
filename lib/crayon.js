'use strict';

const crayon = {
  color: 'blue',
  lengthInCM: 8,
  getUsedUp: function () {
    this.length = this.length - 0.5;
    return "The new length is " + this.lengthInCM;
  }
};
