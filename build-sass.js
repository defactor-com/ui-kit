const sass = require('sass');
const fs = require('fs');
const path = require('path');

const compileSass = (outputFile) => {
  sass.render({
    file: path.resolve(__dirname, 'src/scss/styles.scss'),
    outputStyle: 'compressed'
  }, function(error, result) {
    if (!error) {
      fs.writeFile(outputFile, result.css, function(err) {
        if (!err) {
          console.log(`${outputFile} compiled successfully.`);
        } else {
          console.error(`Error writing ${outputFile}:`, err);
        }
      });
    } else {
      console.error('Error compiling Sass:', error);
    }
  });
};

const distDir = path.resolve(__dirname, 'dist');
if (!fs.existsSync(distDir)){
  fs.mkdirSync(distDir);
}

compileSass(path.resolve(distDir, 'index.css'));
compileSass(path.resolve(distDir, 'index.es.css'));
