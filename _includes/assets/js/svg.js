window.onload = function() {
    var svgs = [];

    var shapes = [];

    var svgWrap = document.createElement('div');
    svgWrap.id = 'svg';
    document.body.appendChild(svgWrap);

    setInterval(function() {
        var shapeIndex = getRandomInt(0, shapes.length);
        let shape;
        switch (shapeIndex) {
            case 0:
                shape = new Line();
                break;
        }
        var life = getRandomInt(1000, 4000);
        shape.style.position = 'absolute';
        shape.style.top = getRandomInt(0, window.innerHeight) + 'px';
        shape.style.left = getRandomInt(0, window.innerWidth) + 'px';
        setTimeout(function() {
            shape.parentNode.removeChild(shape);
        }, life);
        svgWrap.appendChild(shape);
    }, 4000);
};

function Line() {
    var svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    // svg.id = 'layer';
    // svg.setAttribute('data-name', 'layer');
    svg.setAttribute('viewBox', '0 0 100 100');
    svg.innerHTML = `<defs>
    <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="red" />
      <stop offset="100%" stop-color="blue" />
    </linearGradient>
  </defs><path stroke="url(#gradient)" class="cls-1" d="M.35.35,89.83,89.83"/>`;
    var path = svg.querySelector('path');
    var length = path.getTotalLength();
    path.setAttribute('data-length', length);
    // path.setAttribute('stroke', 'url(#e)');
    path.setAttribute('fill', 'none');
    path.setAttribute('stroke-width', 1);
    path.style.strokeDasharray = length + ' ' + length;
    path.style.strokeDashoffset = length;
    path.getBoundingClientRect();
    return svg;
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
