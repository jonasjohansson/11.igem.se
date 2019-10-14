var SBOL = [{ name: '3 Overhang Sticky End', path: '<path d="M50,61.5H6.5"/><path d="M6.5,38.3h87"/>' }, { name: '3 Sticky Restriction Site', path: '<path d="M93.5,12.2V49.9H6.5V87.6"/>' }, { name: '5 Overhang Sticky End', path: '<path d="M6.5,38.3h87"/><path d="M50,61.5H93.5"/>' }, { name: '5 Sticky Restriction Site', path: '<path d="M6.5,12.2V49.9h87V87.6"/>' }, { name: 'Alternate CDS', path: '<path d="M70.42,21.79,97.24,49.9,70.31,78.12l-.31-10-.06-1.94H68L2,66.36V35.74l66.3.3h2l0-2,.11-12.27m-2-4.95L68.31"/>' }, { name: 'Alternate DNA Location', path: '<path d="M50,85.39V16"/>' }, { name: 'Assembly Scar', path: '<path d="M15.08,38.3H84.67"/><path d="M15.08,61.5H84.67"/>' }, { name: 'DNA Cleavage Site', path: '<path d="M50,99.19V26.69"/><path d="M26.8,3.49l46.4,46.4"/><path d="M73.2,3.49,26.8,49.89"/><path d="M-32.39,18.84-2.76,49.9-32.39,81H-98V18.84h65.61m.85-2H-100V83h68.46L0,49.9-31.54,16.84Z"/>' }, { name: 'Insulator', path: '<path d="M91.49,8.4v83h-83V8.4h83m2"/><path d="M71.2,28.7V71.09H28.8V28.7H71"/>' }, { name: 'Operator', path: '<path d="M21,21V79H79V21"/>' }, { name: 'ORI', path: '<path d="M50,17.1A32.8,32.8,0,1,1,17.2,49.9,32.84,32.84,0,0,1,50,17.1m0-2A34.8,34.8,0"/>' }, { name: 'Primer Binding Site', path: '<path d="M12.33,60.87h75.4l-29-20.3"/><path d="M-29.58,21.79-2.76,49.9-29.69,78.12l-.31-10-.06-1.94H-32l-66,.15V35.74l66.3.3h2l0-2,.11-12.27m-2-4.95L-31.69,34-100,33.73V68.37l68-.16L-31.54,83,0,49.9-31.54,16.84Z"/>' }, { name: 'Promoter', path: '<path d="M6.5,99.91V21.61H90.6"/><path d="M67.41,1.62l23.19,20-23.19,20"/>' }, { name: 'Ribosome Entry Site', path: '<path d="M50,22.9c9.85,0,18.73,3.64,25,10.25C82,40.51,85.7,51.32,85.7,64.4V76.9H14.3V64.4C14.3,51.32,18,40.51,25,33.15,31.27,26.54,40.15,22.9,50,22.9m0-2c-20.3"/>' }, { name: 'Terminator', path: '<path d="M50,86.11V16.52"/><path d="M6.5,16.52h87"/>' }];

function init() {
    var svgs = [];

    var shapes = [];

    var svgWrap = document.createElement('div');
    svgWrap.id = 'svg';
    document.body.appendChild(svgWrap);

    // setInterval(function() {
    //     var index = getRandomInt(0, SBOL.length - 1);
    //     addShape(index);
    // }, 2000);

    // addShape(0);

    function addShape(index) {
        let svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        svg.setAttribute('viewBox', `0 0 100 100`);
        svg.setAttribute('preserveAspectRatio', true);
        svg.innerHTML = `
        <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stop-color="red" />
                <stop offset="100%" stop-color="blue" />
            </linearGradient>
        </defs>
        ${SBOL[index].path}`;

        var paths = svg.querySelectorAll('path');

        for (var path of paths) {
            length = path.getTotalLength();
            path.setAttribute('data-length', length);
            path.setAttribute('stroke', 'url(#gradient)');
            path.setAttribute('stroke-miterlimit', 10);
            path.setAttribute('fill', 'none');
            path.setAttribute('stroke-width', 3);
            path.style.strokeDasharray = length * 2;
            path.style.strokeDashoffset = length * 2;
            path.getBoundingClientRect();
        }

        var aspect = {
            x: document.body.offsetWidth / window.innerWidth,
            y: document.body.offsetHeight / window.innerHeight
        };

        var x = getRandomInt(-20, 100) + '%';
        var y = getRandomInt(-20, 100) + '%';
        svg.style.left = x;
        svg.style.top = y;
        // svg.style.top = '-' + getRandomInt(0, 10) + '%';
        // svg.style.left = '-' + getRandomInt(0, 10) + '%';
        svgWrap.appendChild(svg);
        setTimeout(function() {
            svg.classList.add('fade');
            setTimeout(function() {
                svg.parentNode.removeChild(svg);
            }, 2000);
        }, 5000);
    }
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
