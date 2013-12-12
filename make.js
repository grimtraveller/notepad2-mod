/**!
 * make.js, script to build the website for Notepad2-mod
 * Released under the terms of MIT license
 *
 * https://github.com/XhmikosR/notepad2-mod
 *
 * Copyright (C) 2013 XhmikosR
 */

(function () {
    "use strict";

    require("shelljs/make");
    var fs = require("fs"),
        CleanCSS = require("clean-css"),
        UglifyJS = require("uglify-js"),
        ROOT_DIR = __dirname + "/";     // absolute path to project's root

    //
    // make minify
    //
    target.minify = function () {
        cd(ROOT_DIR);
        echo();
        echo("### Minifying css files...");

        // jquery.fancybox.min.css
        var inCss = cat(["css/jquery.fancybox.css",
                         "css/jquery.fancybox-thumbs.css"
        ]);

        var minifier1 = new CleanCSS({
                keepSpecialComments: 1,
                selectorsMergeMode: "ie8"
            });

        fs.writeFileSync("css/jquery.fancybox.min.css", minifier1.minify(inCss), "utf8");

        echo();
        echo("### Finished css/jquery.fancybox.min.css.");

        // pack.css

        var inCss2 = cat(["css/normalize.css",
                          "css/stylesheet.css"
        ]);

        var minifier2 = new CleanCSS({
                keepSpecialComments: 0,
                selectorsMergeMode: "ie8"
            });

        fs.writeFileSync("css/pack.css", minifier2.minify(inCss2), "utf8");

        echo();
        echo("### Finished css/pack.css.");

        echo();
        echo("### Minifying js files...");

        var inJs = cat(["js/jquery.mousewheel.js",
                        "js/jquery.fancybox.js",
                        "js/jquery.fancybox-thumbs.js"]);

        var minifiedJs = UglifyJS.minify(inJs, {
            compress: true,
            fromString: true, // this is needed to pass JS source code instead of filenames
            mangle: true,
            warnings: false
        });

        fs.writeFileSync("js/pack.js", minifiedJs.code, "utf8");

        echo();
        echo("### Finished js/pack.js.");
    };


    //
    // make all
    //
    target.all = function () {
        target.minify();
    };

    //
    // make help
    //
    target.help = function () {
        echo("Available targets:");
        echo("  minify  Creates the minified CSS and JS");
        echo("  help    shows this help message");
    };

}());