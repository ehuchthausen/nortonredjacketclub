const path = require("path");
module.exports = {
    entry: "./app/assets/scripts/app.js",
    output: {
        path: path.resolve("./app/temp/scripts"),
        filename: "App.js"
    },
    module: {
        rules: [ // use to be loaders but is now "rules:"
                {
                    loaders: "babel-loader", // need to have -loader after babel
                    query: {
                        presets: ["env"]
                    },
                    test: /\.js$/,
                    exclude: /node_modules/
            }
        ]
    }
}
