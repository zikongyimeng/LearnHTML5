/**
 * Created by plter on 7/19/16.
 */

module.exports = function (grunt) {

    // grunt.registerTask("a", function () {      /* grunt.registerTask是注册任务*/
    //     grunt.log.writeln("A");
    // });
    //
    // grunt.registerTask("b", function () {
    //     grunt.log.writeln("B");
    // });
    //
    // grunt.registerTask("default", ["a", "b"]);         /*default是默认执行    直接在Terminal里输grunt回车就是执行，若输grunt a是只执行grunt中的a*/

    require("load-grunt-tasks")(grunt);

    grunt.initConfig({
        shell: {
            compile: {
                command: "cd src&&java -jar ../tools/closure-compiler/closure-compiler-v20160713.jar --js_output_file ../build/main.min.js --js cn/zhang/Hello.js cn/zhang/Hi.js App.js"
            }
        }
    });

    grunt.registerTask("default", ["shell:compile"]);

};
