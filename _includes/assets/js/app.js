window.onload = init();
function init() {}

window.onscroll = function() {
	myFunction();
};

function myFunction() {
	var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
	var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
	var scrolled = (winScroll / height) * 100;
	document.querySelector('.loading-bar .bar').style.width = scrolled + '%';
}
