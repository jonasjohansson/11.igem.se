window.onload = function() {
	init();
	var pimgs = document.querySelectorAll('p img');
	for (var pimg of pimgs) {
		pimg.parentNode.classList.add('image');
	}
	createSubNav();
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
			link.innerHTML = count + ' <div><span>' + h.innerHTML + '</span></div>';
			nav.appendChild(link);
		}
	}
}
