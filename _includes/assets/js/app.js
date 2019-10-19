var h = document.documentElement,
	b = document.body,
	st = 'scrollTop',
	sh = 'scrollHeight';

var scrollOffset = 85;

var $loadingBar = document.querySelector('.loading-bar .bar'),
	$cover = document.querySelector('.cover'),
	$article = document.querySelector('article'),
	$aside = document.querySelector('aside');

function init() {
	document.querySelectorAll('section p').forEach(p => {
		imgs = p.querySelectorAll('img');
		if (imgs.length > 0) {
			p.classList.add('image');
		}
		if (imgs.length > 1) {
			p.classList.add('slideshow');
		}
	});

	// $article.style.transform = `translate(0,0)`;

	document.querySelectorAll('p a').forEach(a => {
		if (a.protocol !== window.location.protocol && a.host !== window.location.host) {
			a.setAttribute('target', '_blank');
		}
	});
	createInternalNavigation();
}

window.onscroll = function() {
	var scrolled = ((h[st] || b[st]) / ((h[sh] || b[sh]) - h.clientHeight)) * 100;
	// update loading bar
	$loadingBar.style.width = scrolled + '%';
	// if cover exists, loading bar should stick to it
	// if ($cover !== null) {
	// 	var position = $loadingBar.parentNode.style.position;
	// 	position = st > $cover.offsetTop + $cover.offsetHeight ? 'fixed' : 'relative;';
	// }
	// if aside exists, it should stick
	// if ($aside !== null) {
	// 	var position = $aside.style.position;
	// 	position = (scrollTop > $asideTop) ? 'fixed' : 'relative;'
	// }
};

function createInternalNavigation() {
	var $headings = document.querySelectorAll('section > h1, section > h2, section > h3, section > h4, .member h3');
	var $nav = $aside.querySelector('nav');

	if ($headings.length < 4) {
		$aside.parentNode.removeChild($aside);
		return;
	}

	for (var h of $headings) {
		if (h.id.length !== 0) {
			let link = document.createElement('a');
			link.classList.add(h.nodeName.toLowerCase());
			link.href = '#' + h.id;
			link.innerHTML = `<div><span>${h.innerHTML}</span></div>`;
			$nav.appendChild(link);
			link.onclick = scrollAnchors;
		}
	}

	var link = document.createElement('a');
	$nav.appendChild(document.createElement('br'));
	link.href = '#' + document.body.id;
	link.onclick = scrollAnchors;
	link.innerHTML = '↑' + ' <div><span>To the top</span></div>';
	$nav.appendChild(link);
}

function scrollAnchors(e, respond = null) {
	const distanceToTop = el => Math.floor(el.getBoundingClientRect().top - scrollOffset);
	e.preventDefault();
	var targetID = respond ? respond.getAttribute('href') : this.getAttribute('href');
	const targetAnchor = document.querySelector(targetID);
	if (!targetAnchor) return;
	const originalTop = distanceToTop(targetAnchor);
	window.scrollBy({ top: originalTop, left: 0, behavior: 'smooth' });
	const checkIfDone = setInterval(function() {
		const atBottom = window.innerHeight + window.pageYOffset >= document.body.offsetHeight - 2;
		if (distanceToTop(targetAnchor) === 0 || atBottom) {
			// targetAnchor.tabIndex = '-1';
			// targetAnchor.focus();
			window.history.pushState('', '', targetID);
			clearInterval(checkIfDone);
		}
	}, 100);
}

init();
