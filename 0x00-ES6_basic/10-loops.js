export default function appendToEachArrayValue(array, appendString) {
  const result = [];
  for (const [i, val] of array.entries()) {
    result[i] = appendString + val;
  }

  return result;
}
