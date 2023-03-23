import BaseFilters from './BaseFilters';

const ADJUST_RGB_CONST = [1.04, 1, 1.02];
const SATURATION_CONST = -0.05;

/**
 * Crema Filter.
 * @function
 * @param {Object} imageData
 * @example
 * node.cache();
 * node.filters([Crema]);
 */
function Crema(imageData) {
  const pixels = imageData.data; //  [0, 1, 2, 3,...] => [r, g, b, a, ...]
  const len = pixels.length;

  for (let i = 0; i < len; i += 4) {
    [pixels[i], pixels[i + 1], pixels[i + 2]] = BaseFilters.adjustRGB(
      [pixels[i], pixels[i + 1], pixels[i + 2]],
      ADJUST_RGB_CONST,
    );
    [pixels[i], pixels[i + 1], pixels[i + 2]] = BaseFilters.saturation(
      [pixels[i], pixels[i + 1], pixels[i + 2]],
      SATURATION_CONST,
    );
  }
}

Crema.filterName = 'Crema'; // We assign the filter name here instead of using the fn. name as on prod. code the fn. name is optimized that might cause bug in that case.

export default Crema;
