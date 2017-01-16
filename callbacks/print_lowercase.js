const getHTML = require('../http-functions');
const requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/lowercase.html'
};

const printLowerCase = (html) => {
  console.log(`html is now all lowercase: ${html.toLowerCase()}`);
};

getHTML.getHTML(requestOptions, printLowerCase)
