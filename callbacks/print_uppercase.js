const getHTML = require('../http-functions');
const requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/uppercase.html'
};

const printUpperCase = (html) => {
  console.log(`HTML IS NOW ALL UPPERCASE!!! ${html.toUpperCase()}`);
};

getHTML.getHTML(requestOptions, printUppercase)
