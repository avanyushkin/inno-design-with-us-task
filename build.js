const fs = require('fs');

const files = [
  'public/styles/components/contact.css',
  'public/styles/components/design-with-us.css',
  'public/styles/components/footer.css',
  'public/styles/components/globals.css',
  'public/styles/components/header.css',
  'public/styles/components/hero.css',
  'public/styles/components/products.css',
  'public/styles/components/specifications.css',
  'public/styles/components/support.css',
  'public/styles/components/team.css',

  'public/styles/components/main.css'
]

let result = '';
files.forEach(file => {
  if (fs.existsSync(file)) {
    result += fs.readFileSync(file, 'utf8') + '\n';
  }
});

fs.writeFileSync('public/bundle.css', result);