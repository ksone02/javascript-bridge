const { MOVABLE } = require('./data/constants');
const IO = require('./IO');

/**
 * 다리 객체
 */
class Bridge {
  #length;

  #bridges;

  #bridgesArray;

  constructor(length, bridges) {
    this.#length = length;
    this.#bridges = bridges;
  }

  checkCorrectDirection(direction, index) {
    if (this.#bridges[index] === direction) return MOVABLE.MOVABLE;
    return MOVABLE.IMMOVABLE;
  }
}

module.exports = Bridge;
