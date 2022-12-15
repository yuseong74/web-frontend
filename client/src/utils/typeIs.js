export function typeIs(data) {
  return Object.prototype.toString.call(data).toLowerCase().slice(8, -1);
}

export function isString(data) {
  return typeIs(data) === 'string';
}

export function isNumber(data) {
  return typeIs(data) === 'number' && !isNaN(data);
}
