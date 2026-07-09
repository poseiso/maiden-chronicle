export default function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addPairedShortcode("sealedRecord", function(content, title = "Sealed Record — Notable Moments & Revelations") {
    return `<details class="spoiler-block"><summary><span>${title}</span></summary><div class="spoiler-content">${content}</div></details>`;
  });

  return {
    pathPrefix: process.env.SITE_BASE_PATH || "/",
    dir: {
      input: ".",
      output: "_site",
      includes: "_includes"
    },
    templateFormats: ["njk", "md"],
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk"
  };
}
