window.onload = function() {
	var pimgs = document.querySelectorAll('p img');
	for (var pimg of pimgs) {
		pimg.parentNode.classList.add('image');
	}
	createSubNav();

	for (let a of document.querySelectorAll('p a')) {
		if (!a.href.includes('#')) {
			a.setAttribute('target', '_blank');
		}
	}
};

const easeInCubic = function(t) {
	return t * t * t;
};

const scrollToElem = (startTime, currentTime, duration, scrollEndElemTop, startScrollOffset) => {
	const runtime = currentTime - startTime;
	let progress = runtime / duration;

	progress = Math.min(progress, 1);

	const ease = easeInCubic(progress);

	window.scroll(0, startScrollOffset + scrollEndElemTop * ease);
	if (runtime < duration) {
		requestAnimationFrame(timestamp => {
			const currentTime = timestamp || new Date().getTime();
			scrollToElem(startTime, currentTime, duration, scrollEndElemTop, startScrollOffset);
		});
	}
};

window.onscroll = function() {
	myFunction();
};

function myFunction() {
	var winScroll = document.body.scrollTop || document.documentElement.scrollTop;

	var loadingBar = document.querySelector('.loading-bar .bar');
	var subnav = document.querySelector('.lading-bar .bar');

	var coverEl = document.querySelector('.cover');

	var articleEl = document.querySelector('article');

	var asideEl = document.querySelector('aside');

	if (coverEl !== null) {
		var coverElTop = coverEl.offsetTop;
		if (winScroll > coverElTop + coverEl.offsetHeight) {
			loadingBar.parentNode.style.position = 'fixed';
		} else {
			loadingBar.parentNode.style.position = 'relative';
		}
	}

	if (asideEl !== null) {
		var articleElTop = articleEl.offsetTop;
		var asideElTop = articleEl.offsetTop;
		if (winScroll > asideElTop) {
			asideEl.style.position = 'fixed';
		} else {
			asideEl.style.position = 'relative';
		}
	}

	var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
	var scrolled = (winScroll / height) * 100;

	loadingBar.style.width = scrolled + '%';
}

function createSubNav() {
	var allH = document.querySelectorAll('h1,h2,h3');
	var nav = document.querySelector('aside nav');
	console.log(nav);
	var count = 0;
	for (var h of allH) {
		if (h.id.length !== 0) {
			++count;
			var link = document.createElement('a');
			link.href = '#' + h.id;
			console.log(h.innerHTML);
			link.innerHTML = count + ' <div><span>' + h.innerHTML + '</span></div>';
			nav.appendChild(link);
		}
	}
}
