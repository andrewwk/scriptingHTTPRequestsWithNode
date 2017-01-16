const https = require("https");

const getAndPrintHTML = () => {

  const requestOptions = {
    host: "sytantris.github.io",
    path: "/http-examples/step2.html"
  };

  https.get(requestOptions, (response) => {

    const bufferedData = []

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

getAndPrintHTML();
