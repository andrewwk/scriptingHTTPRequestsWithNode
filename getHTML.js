const https          = require("https")
const url            = "https://sytantris.github.io/http-examples/step4.html"
const requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};

const printHTML = (html) => {
  console.log(`Printing HTML: ${html}`);
};

const getHTML = (options, callback) => {

  https.get(options, (response) => {
    const bufferedData = [];

    response.setEncoding("utf8");

    response.on("data", (data) => {
      bufferedData.push(data);
    });

    response.on("end", () => {
      callback(bufferedData.join(""))
    });

  });
};

// getHTML(requestOptions, printHTML);
getHTML(url, printHTML);
