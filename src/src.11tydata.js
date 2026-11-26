// Keep flat URLs (desktop.html, not desktop/index.html), as before.
export default {
  permalink: (data) => `${data.page.filePathStem.slice(1)}.html`,
};
