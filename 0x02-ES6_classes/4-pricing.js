// Pricing
import Currency from './3-currency';

/**
 * Represents a Pricing object.
 * @class
 */
export default class Pricing {
  /**
   * Creates a new Pricing object.
   * @constructor
   * @param {number} amount - The amount of the pricing.
   * @param {Currency} currency - The currency of the pricing.
   */
  constructor(amount = '', currency) {
    this.amount = amount;
    this.currency = currency;
  }

  /**
   * Returns the full price including the currency code and name.
   * @returns {string} The full price.
   */
  displayFullPrice() {
    const code = (this.currency._code);
    const name = (this.currency._name);
    const money = `${this.amount} ${name} (${code})`;

    return money;
  }

  /**
   * Converts the price using the given conversion rate.
   * @static
   * @param {number} amount - The amount to be converted.
   * @param {number} conversionRate - The conversion rate.
   * @returns {number} The converted price.
   * @throws {TypeError} If amount or conversionRate is not a number.
   */
  static convertPrice(amount = 0, conversionRate = 0) {
    if (typeof amount !== 'number') {
      throw new TypeError('amount must be a number');
    }

    if (typeof conversionRate !== 'number') {
      throw new TypeError('conversionRate must be a number');
    }

    return (amount * conversionRate);
  }

  /**
   * Gets the amount of the pricing.
   * @returns {number} The amount.
   */
  get amount() {
    return this._amount;
  }

  /**
   * Sets the amount of the pricing.
   * @param {number} value - The amount to be set.
   * @throws {TypeError} If value is not a number.
   */
  set amount(value) {
    if (typeof value !== 'number') {
      throw new TypeError('amount must be a number');
    }
    this._amount = value;
  }

  /**
   * Gets the currency of the pricing.
   * @returns {Currency} The currency.
   */
  get currency() {
    return this._currency;
  }

  /**
   * Sets the currency of the pricing.
   * @param {Currency} value - The currency to be set.
   * @throws {TypeError} If value is not a Currency object.
   */
  set currency(value) {
    if (!(value instanceof Currency)) {
      throw new TypeError('currency must be a Currency');
    }
    this._currency = value;
  }
}
