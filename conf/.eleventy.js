
module.exports = function(eleventyConfig){

    eleventyConfig.addWatchTarget("../src/css/");



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

    return {
        dir: {
		input: "../src",
		output: "../docs",
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