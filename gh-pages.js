var ghpages = require('gh-pages');
 
ghpages.publish('build', {
    branch: 'gh-pages',
    repo: 'https://github.com/kcpru/komiks.git'
  });