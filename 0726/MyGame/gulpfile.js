/**
 * Created by sks on 2016/7/26.
 */
/**
 * Created by plter on 7/26/16.
 */

const gulp = require("gulp");
const shell = require("gulp-shell");
const fs = require("fs");


const closureCompilerFileName = "closure-compiler-v20160713.jar";
const closureCompilerFile = `${__dirname}/tools/${closureCompilerFileName}`;
const distDir = `${__dirname}/dist`;
const distFileName = "game.min.js";
const mapFileName = `${distFileName}.map`;
const mapFile = `${distDir}/${mapFileName}`;
const distFile = `${distDir}/${distFileName}`;
const srcFiles = [
    "cn/ucai/game2d/events/G2DEvent.js",
    "cn/ucai/game2d/events/G2DMouseEvent.js",
    "cn/ucai/game2d/events/G2DEventDispatcher.js",
    "cn/ucai/game2d/display/Display.js",
    "cn/ucai/game2d/display/Rectangle.js",
    "cn/ucai/game2d/display/Text.js",
    "cn/ucai/game2d/display/Container.js",
    'cn/ucai/game2d/app/Game2dApp.js',
    'cn/ucai/mygame/Game.js'
];

var script = `java -jar ${closureCompilerFile} --create_source_map ${mapFile} --js_output_file ${distFile} --js ${srcFiles.join(" ")}`;

gulp.task("outputScript", function () {
    console.log(script);
});
gulp.task("compile", ["outputScript"], shell.task([script], {cwd: "src"}));
gulp.task("appendMapInfo", ["compile"], function () {
    fs.appendFileSync(distFile, `\n//# sourceMappingURL=${mapFileName}\n`);
});

gulp.task("default", ["appendMapInfo"]);