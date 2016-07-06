/*
 * grunt-transcoding
 * \
 *
 * Copyright (c) 2013 hancong03
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks

  grunt.registerMultiTask('transcoding', 'File encoding conversion tool', function() {
    // Merge task-specific and/or target-specific options with these defaults.
    var options = this.options({
      punctuation: '.',
      separator: ', '
    });

    // Iterate over all specified file groups.
    this.files.forEach(function(f) {
      // Concat specified files.
      var src = f.src.filter(function(filepath) {
        // Warn on and remove invalid source files (if nonull was set).
        if (!grunt.file.exists(filepath)) {
          grunt.log.warn('Source file "' + filepath + '" not found.');
          return false;
        } else {
          return true;
        }
      }).map(function(filepath) {
        // Read file source.
        return grunt.file.read(filepath);
      }),
      fileCount = src.length,
      iconvLite = require( "iconv-lite" );

      src.forEach( function ( content, index ) {

          grunt.file.write( f.src[index], iconvLite.encode( content, options.charset ), {
              encoding: options.charset
          } );

      } );


      // Print a success message.
      grunt.log.writeln( grunt.log.wordlist( [fileCount] ) +' files transcoded.' );

    });
  });

};
