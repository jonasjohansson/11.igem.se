window.onload = function() {
	var pimgs = document.querySelectorAll('p img');
	for (var pimg of pimgs) {
		pimg.parentNode.classList.add('image');
	}
	createSubNav();

	for (let a of document.querySelectorAll('p a')) {
		if (a.protocol == window.location.protocol && a.host == window.location.host) {
		} else {
			a.setAttribute('target', '_blank');
		}
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

	console.log(winScroll);

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
	var allH = document.querySelectorAll('section > h1, section > h2, section > h3, section > h4, .member h3');
	var nav = document.querySelector('aside nav');

	if (allH.length < 3) {
		nav.parentNode.parentNode.removeChild(nav.parentNode);
		return;
	}
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

	var link = document.createElement('a');
	nav.appendChild(document.createElement('br'));
	link.href = '#' + document.documentElement.id;
	link.innerHTML = '↑' + ' <div><span>To the top</span></div>';
	nav.appendChild(link);
}
