const getHTML        = require('./http-functions');
const url            = "https://sytantris.github.io/http-examples/step5.html";
const requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step5.html'
};

const printHTML = (html) => {
  console.log(`Printing HTML: ${html}`);
};

getHTML.getHTML(url, printHTML);
