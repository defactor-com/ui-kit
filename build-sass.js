const sass = require('sass-embedded');
const fs = require('fs');
const path = require('path');

const compileSass = async (inputFile, outputFile) => {
  try {
    const result = await sass.compileAsync(inputFile, { style: 'compressed' });
    fs.writeFileSync(outputFile, result.css);
  } catch (error) {
    console.error(`Error compiling Sass for ${outputFile}:`, error);
  }
};

const distDir = path.resolve(__dirname, 'dist');
if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir);
}

const inputFile = path.resolve(__dirname, 'src/scss/styles.scss');
compileSass(inputFile, path.resolve(distDir, 'index.css'));
compileSass(inputFile, path.resolve(distDir, 'index.es.css'));
