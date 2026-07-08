/* eslint-disable no-empty */
const fs = require('fs');
const path = require('path');


// Write a sample file for demonstration
    const sampleFilesDir = path.join(__dirname, 'sample-files');
    const sampleTxt = path.join(sampleFilesDir, 'sample.txt');

    if (!fs.existsSync(sampleFilesDir)) {
    fs.mkdirSync(sampleFilesDir);
    }
    fs.writeFileSync(sampleTxt, 'Hello, async world!', 'utf8');


// 1. Callback style
fs.readFile(sampleTxt, 'utf8', (err, data) => {
  if (err){
        console.error('Callback error:', err);
   return;
  }
  console.log(`Callback read: ${data}`);
});

  // Callback hell example (test and leave it in comments):

/*
  Callback hell example:

  fs.readFile(sampleTxt, 'utf8', (err, data1) => {
    fs.readFile(sampleTxt, 'utf8', (err2, data2) => {
      fs.readFile(sampleTxt, 'utf8', (err3, data3) => {
        console.log("Hello, async world!");
      });
    });
  });
*/
  // 2. Promise style

function readFilePromise() {
  return new Promise((resolve, reject) => {
    fs.readFile(sampleTxt, 'utf8', (err, data) => {
      if (err) reject(err);
      else resolve(data);
    });
  });
}

readFilePromise()
  .then((data) => console.log(`Promise read: ${data}`))
  .catch(() => {});

      // 3. Async/Await style
async function readAsync() {
  try {
    const data = await readFilePromise();
    console.log(`Async/Await read: ${data}`);
  } catch {}
}

readAsync();