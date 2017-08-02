"use strict"
{
    // Required to form a complete output path
    let path = require('path');

    // Plagin for cleaning up the output folder (bundle) before creating a new one
    const CleanWebpackPlugin = require('clean-webpack-plugin');

    // Path to the output folder
    const bundleFolder = "wwwroot/bundle/";

    module.exports = {
        // Application entry point
        entry: "./Scripts/main.ts",

        // Output file
        output: {
            filename: 'script.js',
            path: path.resolve(__dirname, bundleFolder)
        },
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    loader: "ts-loader",
                    exclude: /node_modules/,
                },
            ]
        },
        resolve: {
            extensions: [".tsx", ".ts", ".js"]
        },
        plugins: [
            new CleanWebpackPlugin([bundleFolder])
        ],
        // Include the generation of debugging information within the output file
        // (Required for debugging client scripts)
        devtool: "inline-source-map"
    };
}