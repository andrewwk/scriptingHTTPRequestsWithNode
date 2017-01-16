const https = require("https");

//alternatively process.argv[2] can be used
const url = "https://sytantris.github.io/http-examples/step3.html";

const getAndPrintHTML = (requestUrl) => {

  https.get(requestUrl, (response) => {
    const bufferedData = [];

    response.setEncoding("utf8");

    response.on("data", (data) => {
      bufferedData.push(data);
      bufferedData.forEach((d) => {
        console.log(`Chunk Received. Buffered Data: ${d}\n`);
      })
    });

    response.on("end", () => {
      console.log("Response stream complete.");
    });

  });
};

getAndPrintHTML(url);
