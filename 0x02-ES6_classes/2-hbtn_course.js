/**
 * Represents a Holberton Course.
 * @class
 */
export default class HolbertonCourse {
  /**
   * Create a Holberton Course.
   * @constructor
   * @param {string} name - The name of the course.
   * @param {number} length - The length of the course in weeks.
   * @param {string[]} students - The list of students enrolled in the course.
   * @throws {TypeError} If the name is not a string, length is not a number, or students is not an array of strings.
   */
  constructor(name, length, students) {
    if (typeof name !== "string") {
      throw new TypeError("Name must be a string");
    }
    if (typeof length !== "number") {
      throw new TypeError("Length must be a number");
    }
    if (!Array.isArray(students) || !students.every((student) => typeof student === "string")) {
      throw new TypeError("Students must be an array of strings");
    }

    this._name = name;
    this._length = length;
    this._students = students;
  }

  /**
   * Get the name of the course.
   * @returns {string} The name of the course.
   */
  get name() {
    return this._name;
  }

  /**
   * Set the name of the course.
   * @param {string} newName - The new name of the course.
   * @throws {TypeError} If the newName is not a string.
   */
  set name(newName) {
    if (typeof newName !== "string") {
      throw new TypeError("Name must be a string");
    }
    this._name = newName;
  }

  /**
   * Get the length of the course.
   * @returns {number} The length of the course in weeks.
   */
  get length() {
    return this._length;
  }

  /**
   * Set the length of the course.
   * @param {number} newLength - The new length of the course in weeks.
   * @throws {TypeError} If the newLength is not a number.
   */
  set length(newLength) {
    if (typeof newLength !== "number") {
      throw new TypeError("Length must be a number");
    }
    this._length = newLength;
  }

  /**
   * Get the list of students enrolled in the course.
   * @returns {string[]} The list of students enrolled in the course.
   */
  get students() {
    return this._students;
  }

  /**
   * Set the list of students enrolled in the course.
   * @param {string[]} newStudents - The new list of students enrolled in the course.
   * @throws {TypeError} If the newStudents is not an array of strings.
   */
  set students(newStudents) {
    if (!Array.isArray(newStudents) || !newStudents.every((student) => typeof student === "string")) {
      throw new TypeError("Students must be an array of strings");
    }
    this._students = newStudents;
  }
}

