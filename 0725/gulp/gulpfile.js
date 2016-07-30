/**
 * Created by sks on 2016/7/25.
 */
var gulp=require("gulp");

gulp.task("task1",function () {
    console.log("Task1");
});
gulp.task("default",["task1"],function () {    /*["task1"]是依赖项*/
    console.log("Hello Gulp");
})



/*如果只输出Task1的话可在terminal中输gulp task1回车;如果在terminal中输gulp的话会输出Task1和Hello Gulp两句*/
