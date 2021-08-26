const { DateTime } = require("luxon");

module.exports = function(eleventyConfig){

    eleventyConfig.addWatchTarget("./src/css/");



	// Filters

	eleventyConfig.addNunjucksFilter("recent", (arr, limit) => {
		return arr.slice(0, limit)
	});

	eleventyConfig.addNunjucksFilter("range", (arr, lower, upper) => { 
		return arr.slice(lower, upper)
	});

	eleventyConfig.addNunjucksFilter("makeUppercase", (value) => { 
		return value.toUpperCase();
	});

	eleventyConfig.addFilter('organisationFilter', function(collection, organisation) {
		if (!organisation) return collection;
			const filtered = collection.filter(item => item.data.organisation == organisation)
			return filtered;
	});



	// Shortcodes 
	eleventyConfig.addShortcode("figure", (imgFileName, caption) => {
		const captionMarkup = caption ? `<figcaption>${caption}</figcaption>` : '';
		return `<figure><img src="img/${imgFileName}" />${captionMarkup}</figure>`;
	});

	eleventyConfig.addFilter("cleanDate", (dateObj) => {
		return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED);
	});



	eleventyConfig.addPassthroughCopy("./src/admin");
    return {
        dir: {
		input: "./src",
		output: "./docs",
		includes: "_includes"
	},
        templateFormats: [
		"html",
		"css",
		"njk",
		"md",
		"js",
		"png",
		"jpg",
		"svg",
		"woff",
		"woff2",
		"ttf",
		"ico",
		"csv",
		"json",
		"pdf",
		"txt",
		"zip",
		"htaccess"
	]
    };
};