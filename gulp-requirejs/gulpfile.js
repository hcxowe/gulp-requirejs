// 引入gulp
var gulp = require('gulp');

// 引入插件
var concat = require('gulp-concat'); // 合并
var jshint = require('gulp-jshint'); // JS规范验证
var uglify = require('gulp-uglify'); // 压缩
var rename = require('gulp-rename'); // 文件名命名
var amdopt = require('amd-optimize'); // requirejs优化
var watch  = require('gulp-watch');  // 监视

// 任务
// js验证
gulp.task('lint', function(){
	gulp.src('./js/*.js')
		.pipe(jshint())
		.pipe(jshint.reporter('default'));
});

// requirejs 合并
gulp.task('rjs', function(){
	gulp.src('./js/*.js')
		.pipe(amdopt('index', {
			paths: {  
                "jquery": "jquery",
				"aaa": "aaa",
				"bbb": "bbb"
            }
		}))
		.pipe(concat('index.js'))
		.pipe(gulp.dest('dist'))
		.pipe(rename('index.min.js'))
		.pipe(uglify())
		.pipe(gulp.dest('dist'));
});

gulp.task('default', ['lint', 'rjs']);
