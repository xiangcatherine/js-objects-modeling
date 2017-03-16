'use strict';

const television = {
  isOn: false,
  volume: 10,
  channel: 2,
  type: 'plasma',
  resolution: '1060 x 480',
  togglePower: function() {
    television.isOn = !television.isOn;
  },
  increaseVolume: function() {
    television.volume = television.volume + 1;
    return "Volume set to " + television.volume;
  },
  decreaseVolume: function() {
    if(television.volume > 0) {
      television.volume = television.volume -1;
    }
    return "Volume set to " + television.volume;
  },
  increaseChannel: function() {
    television.channel = television.channel + 1;
    return "Channel set to " + television.channel;
  },
  decreaseChannel: function() {
    if(television.channel > 0) {
      television.channel = television.channel -1;
    }
    return "Channel set to " + television.channel;
  },
};

module.exports = television;
