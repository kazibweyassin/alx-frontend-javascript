/**
 *  Abstract Building Animal
 *
 * @class Building
 */
/**
 * Represents a building.
 * @class
 */
export default class Building {
  /**
   * Creates a new instance of the Building class.
   * @constructor
   * @param {number} [sqft=0] - The square footage of the building.
   */
  constructor(sqft = 0) {
    if (this.constructor !== Building
        && typeof this.evacuationWarningMessage !== 'function') {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }

    this._sqft = sqft;
  }

  /**
   * Gets the square footage of the building.
   * @returns {number} The square footage of the building.
   */
  get sqft() {
    return this._sqft;
  }
}
