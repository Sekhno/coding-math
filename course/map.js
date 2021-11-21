// import norm from 'normalization.js'
// import lerp from 'linear-interpolation.js'

/**
 * 
 * @param {*} value 
 * @param {*} sourceMin 
 * @param {*} sourceMax 
 * @param {*} destMin 
 * @param {*} destMax 
 * @returns 
 */

function map(value, sourceMin, sourceMax, destMin, destMax) {
    return lerp(norm(value, sourceMin, sourceMax), destMin, destMax); 
}

/**
 * Example
 */

function init() {
    const canvas = document.getElementById('canvas'),
          context = canvas.getContext('2d'),
          width = canvas.width = window.innerWidth,
          height = canvas.height = window.innerHeight;
    
    document.addEventListener('mousemove', function (event) {
        const radius = map(event.clientY,
                            0, height,
                            20,340);

        context.clearRect(0, 0, width, height);
        context.beginPath();
        context.arc(width / 2, height / 2, radius, 0,  Math.PI * 2, false);
        context.fill();
    })
}