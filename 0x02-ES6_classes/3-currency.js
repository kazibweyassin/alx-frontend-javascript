/*
    Make method
    This can't with arrow,
    because arrow function doesn't work with this
*/
/**
 * Represents a currency.
 * @class
 */
export default class Currency {
  /**
   * Creates a new Currency instance.
   * @constructor
   * @param {string} [code=''] - The currency code.
   * @param {string} [name=''] - The currency name.
   */
  constructor(code = '', name = '') {
    this.code = code;
    this.name = name;
  }

  /**
   * Returns the full currency display.
   * @returns {string} The full currency display.
   */
  displayFullCurrency() {
    return `${this.name} (${this.code})`;
  }

  /**
   * Gets the currency code.
   * @returns {string} The currency code.
   */
  get code() {
    return this._code;
  }

  /**
   * Sets the currency code.
   * @param {string} value - The currency code.
   * @throws {TypeError} If the value is not a string.
   */
  set code(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Code must be a string');
    }
    this._code = value;
  }

  /**
   * Gets the currency name.
   * @returns {string} The currency name.
   */
  get name() {
    return this._name;
  }

  /**
   * Sets the currency name.
   * @param {string} value - The currency name.
   * @throws {TypeError} If the value is not a string.
   */
  set name(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = value;
  }
}
