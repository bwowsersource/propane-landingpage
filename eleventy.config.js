import nunjucks from 'nunjucks';

export default function (eleventyConfig) {
  // The pages use {{accent}} for their own runtime, so keep Nunjucks from evaluating it:
  // variables use [[ ]] here, {% include %} / {% if %} work as usual.
  const env = new nunjucks.Environment(new nunjucks.FileSystemLoader('src/_includes'), {
    tags: { variableStart: '[[', variableEnd: ']]' },
  });
  eleventyConfig.setLibrary('njk', env);

  eleventyConfig.addPassthroughCopy({
    'site.css': 'site.css',
    'support.js': 'support.js',
    'logo.svg': 'logo.svg',
    'CNAME': 'CNAME',
    'src/.nojekyll': '.nojekyll',
    'vendor': 'vendor',
    'assets': 'assets',
  });

  return {
    dir: { input: 'src', output: 'docs', includes: '_includes' },
    templateFormats: ['html'],
    htmlTemplateEngine: 'njk',
  };
}
