const { DateTime } = require('luxon');
const CleanCSS = require('clean-css');
const UglifyJS = require('uglify-es');
const htmlmin = require('html-minifier');

module.exports = function(eleventyConfig) {
	eleventyConfig.addPairedShortcode('div', function(content, className = '') {
		return `<div class="${className}">${content}</div>`;
	});

	eleventyConfig.addPairedShortcode('quote', function(content, name) {
		return `<q>${content}</q><p>— ${name}</p>`;
	});

	eleventyConfig.addPairedShortcode('video2', function(content, path, poster = '') {
		return `<figure class="video"><video src="${path}" poster="${poster}" width="960" height="540" muted autoplay loop playsinline></video><figcaption>${content}</figcaption></figure>`;
	});

	eleventyConfig.addShortcode('vimeo', function(vimeoId) {
		return `<figure class="video vimeo"><iframe src="https://player.vimeo.com/video/${vimeoId}?loop=1&autoplay=1&muted=1&controls=0" allow="autoplay; fullscreen"  allowfullscreen></iframe></figure>`;
	});

	eleventyConfig.addShortcode('video', function(path, poster = '', description = '') {
		return `<figure class="video"><video src="${path}" poster="${poster}" width="960" height="540" muted autoplay loop playsinline></video><figcaption>${description}</figcaption></figure>`;
	});

	eleventyConfig.addShortcode('audio', function(path) {
		return `<audio src="${path}"></audio>`;
	});

	eleventyConfig.addShortcode('image', function(path, description = '') {
		return `<figure class="image"><img src="${path}"><figcaption>${description}</figcaption></figure>`;
	});

	eleventyConfig.addShortcode('define', function(word, definition = '') {
		return `<span class="definition" title="${definition}">${word}</span>`;
	});

	eleventyConfig.addPairedShortcode('callout', function(content, emoji = '') {
		return `<div class="callout"><span class="emoji">${emoji}</span>${content}</div>`;
	});

	eleventyConfig.addPairedShortcode('slideshow', function(content) {
		return `<div class="slideshow">${content}</div>`;
	});

	eleventyConfig.addShortcode('hero', function(path, content = '') {
		var isVideo = path.match(/.(mp4|webm|ogv)/i) ? true : false;
		if (isVideo) {
			return `<div class="cover video"><video src="${path}" width="960" height="540" autoplay loop playsinline controls></video>${content}</div>`;
		} else {
			return `<div class="cover image"><img src="${path}">${content}</div>`;
		}
	});

	eleventyConfig.addFilter('wrap', function(string) {
		string = string.trim();
		string = string.replace(/^(?:(?!<figure>|<\/figure>)[\S\s])*$/gim, function(str) {
			return `<section class="text-layout">${str}</section>`;
		});
		return string;
	});

	// Minify CSS
	eleventyConfig.addFilter('cssmin', function(code) {
		return new CleanCSS({ inline: ['none'] }).minify(code).styles;
	});

	// Minify JS
	eleventyConfig.addFilter('jsmin', function(code) {
		let minified = UglifyJS.minify(code);
		if (minified.error) {
			console.log('UglifyJS error: ', minified.error);
			return code;
		}
		return minified.code;
	});

	// Minify HTML output
	eleventyConfig.addTransform('htmlmin', function(content, outputPath) {
		if (outputPath.indexOf('.html') > -1) {
			let minified = htmlmin.minify(content, {
				useShortDoctype: true,
				removeComments: true,
				collapseWhitespace: true
			});
			return minified;
		}
		return content;
	});

	// only content in the `posts/` directory
	eleventyConfig.addCollection('posts', function(collection) {
		return collection.getAllSorted().filter(function(item) {
			return item.inputPath.match(/^\.\/posts\//) !== null;
		});
	});

	// Don't process folders with static assets e.g. images
	eleventyConfig.addPassthroughCopy('static/img');
	eleventyConfig.addPassthroughCopy('admin');
	eleventyConfig.addPassthroughCopy('_includes/assets/');

	/* Markdown Plugins */
	let markdownIt = require('markdown-it');
	let markdownItAnchor = require('markdown-it-anchor');
	let options = {
		html: true,
		breaks: true,
		linkify: true
	};
	let opts = {
		permalink: false
	};

	eleventyConfig.setLibrary('md', markdownIt(options).use(markdownItAnchor, opts));

	return {
		templateFormats: ['md', 'njk', 'html', 'liquid'],

		// If your site lives in a different subdirectory, change this.
		// Leading or trailing slashes are all normalized away, so don’t worry about it.
		// If you don’t have a subdirectory, use "" or "/" (they do the same thing)
		// This is only used for URLs (it does not affect your file structure)
		pathPrefix: '/',

		markdownTemplateEngine: 'liquid',
		htmlTemplateEngine: 'njk',
		dataTemplateEngine: 'njk',
		passthroughFileCopy: true,
		dir: {
			input: '.',
			includes: '_includes',
			data: '_data',
			output: '_site'
		}
	};
};
