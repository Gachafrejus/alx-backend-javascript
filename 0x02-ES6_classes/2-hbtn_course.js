export default class HolbertonCourse {
  constructor(name, length, students) {
    // verify types of attributes;
    if (typeof name === 'string' && typeof length === 'number' && Array.isArray(students) && students.every((student) => typeof student === 'string')) {
      this._name = name;
      this._length = length;
      this._students = students;
    } else {
      throw TypeError('Invalid attribute type');
    }
  }

  // getter for name attribute
  get name() {
    return this._name;
  }
