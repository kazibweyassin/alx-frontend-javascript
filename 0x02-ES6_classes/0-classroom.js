/**
 * Represents a classroom.
 * @class
 */
export default class ClassRoom {
	/**
	 * Creates a new instance of the ClassRoom class.
	 * @constructor
	 * @param {number} maxStudentsSize - The maximum size of the classroom.
	 */
	constructor(maxStudentsSize = 0) {
		this._maxStudentsSize = maxStudentsSize; 
	}
}
