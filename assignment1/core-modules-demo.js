/* eslint-disable no-empty */
const os = require('os');
const path = require('path');
const fs = require('fs');
const fsp = require('fs').promises;

const sampleFilesDir = path.join(__dirname, 'sample-files');
if (!fs.existsSync(sampleFilesDir)) {
  fs.mkdirSync(sampleFilesDir, { recursive: true });
}

// OS module
console.log('Platform:', os.platform());
console.log('CPU:', os.cpus()[0].model);
console.log('Total Memory:', os.totalmem());

// Path module
const joinedPath = path.join('sample-files', 'demo.txt');
console.log('Joined path:', joinedPath);

// fs.promises API
// --- FS.PROMISES ---
async function runDemo() {
  const folder = path.join(__dirname, 'sample-files');
  const file = path.join(folder, 'demo.txt');

  // Ensure folder exists
  try {
    await fsp.mkdir(folder, { recursive: true });
  } catch {}

  // Write file
  await fsp.writeFile(file, 'fs.promises read: Hello from fs.promises!', 'utf8');

  // Read file
  const content = await fsp.readFile(file, 'utf8');
  console.log('fs.promises read:', content);
}

runDemo();


// Streams for large files- log first 40 chars of each chunk
async function streamDemo() {
  const folder = path.join(__dirname, 'sample-files');
  const largeFile = path.join(folder, 'largefile.txt');

  // Ensure folder exists
  if (!fs.existsSync(folder)) {
    fs.mkdirSync(folder, { recursive: true });
  }

  // Create largefile.txt with many lines
  const writeStream = fs.createWriteStream(largeFile, { encoding: 'utf8' });
  for (let i = 1; i <= 100; i++) {
    writeStream.write(`This is line number ${i} in the large file.\n`);
  }
  writeStream.end();

  writeStream.on('finish', () => {
    // Read using a readable stream with highWaterMark
    const readStream = fs.createReadStream(largeFile, {
      highWaterMark: 1024 
    });

    readStream.on('data', (chunk) => {
      const preview = chunk.toString().slice(0, 40);
      console.log(`Read chunk: ${preview}`);
    });

    readStream.on('end', () => {
      console.log('Finished reading large file with streams');
    });
  });
}

streamDemo();
