/**
 * BlackAndWhite Filter.
 * @function
 * @param {Object} imageData
 * @example
 * node.cache();
 * node.filters([BlackAndWhite]);
 */
function BlackAndWhite(imageData) {
  const pixels = imageData.data; //  [0, 1, 2, 3,...] => [r, g, b, a, ...]
  const len = pixels.length;
  const thresholdValue = 100;

  for (let i = 0; i < len; i += 4) {
    const isWhite =
      (pixels[i] + pixels[i + 1] + pixels[i + 2]) / 3 > thresholdValue;
    const val = isWhite ? 255 : 0;
    pixels[i] = val;
    pixels[i + 1] = val;
    pixels[i + 2] = val;
  }
}

BlackAndWhite.filterName = 'BlackAndWhite'; // We assign the filter name here instead of using the fn. name as on prod. code the fn. name is optimized that might cause bug in that case.

export default BlackAndWhite;
