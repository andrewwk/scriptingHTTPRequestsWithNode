const https   = require("https")

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
module.exports = {
  getHTML: getHTML
};
