/**
 * 
 * @param {Number} value 
 * @param {Number} min 
 * @param {Number} max 
 * @returns 
 */
function norm(value, min, max) {
    return (value - min) / (max - min)
}

/**
 * Example
 */

function init() {
    const canvas = docement.getElementById('canvas'),
          context = canvas.getContext('2d'),
          width = canvas.width = window.innerWidth,
          height = canvas.height = window.innerHeight,

          values = [7, 5, 21, 18, 33, 12],
          min = Math.min.apply(null, values),
          max = Math.max.apply(null, values);

    context.beginPath();

    for (let i = 0; i < values.length; i += 1) {
        let normValue = norm(values[i], min, max),
            x = width / (values.length - 1) * i,
            y = height - height * normValue;

        if(i == 0) {
            context.moveTo(x, y)
        }
        else {
            context.lineTo(x, y)
        }
    }
    context.stroke();
}