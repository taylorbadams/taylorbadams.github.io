const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");

module.exports = function(eleventyConfig) {
  eleventyConfig.addPlugin(eleventyNavigationPlugin);
  eleventyConfig.addPassthroughCopy({
    "./assets/": "/assets/",
  })

  return {
    markdownTemplateEngine: "liquid",
    htmlTemplateEngine: "liquid", // Forces .html files to use Liquid
    templateFormats: ["html", "md", "liquid"], // Explicitly tracks these extensions
    dir: {
      input: ".",
      output: "_site"
    }
  };
};
