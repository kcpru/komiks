var ghpages = require('gh-pages');
 
ghpages.publish('build', {
    branch: 'master',
    repo: 'https://github.com/kcpru/komiks.git'
  });