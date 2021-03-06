const path = require('path');


module.exports = {
    entry:"./src/index.js",
    output:{
        path:path.resolve(".","build"),
        filename:"bynd.js"
    },
    module: {
        rules: [
          {
            test: /\.css$/i,
            use: ["style-loader", "css-loader"],
          },
        ],
      },
      mode:"development",

};