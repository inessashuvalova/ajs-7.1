export default class Validator {
  // eslint-disable-next-line class-methods-use-this
  validateUsername(name) {
    if (!name) {
      throw new Error('bad data input');
    }
    const firstCheck = /^[\w-]*$/.test(name);
    const secondCheck = !/(\d{4,})+/g.test(name);
    const thirdCheck = /^[^\d-_].*[^\d-_]$/.test(name);
    const result = firstCheck && secondCheck && thirdCheck;

    return result;
  }
}
