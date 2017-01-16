const getHTML = require('../http-functions');
const requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/reverse.html'
};

const printReverse = (html) => {
  console.log("Raw html", html);
  console.log(`html is now reversed ${html.split("").reverse().join("")}`);
};

getHTML.getHTML(requestOptions, printReverse)
