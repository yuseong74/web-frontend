function getStyle(elementNode, propName) {
  var computedValue = getComputedStyle(elementNode).getPropertyValue(propName);
  return parseInt(computedValue, 10);
}
function setStyle(elementNode, propName, value) {
  elementNode.style[propName] = value;
}
export default function css(elementNode, propName, value) {
  return !value ? getStyle(elementNode, propName) : setStyle(elementNode, propName, value);
}