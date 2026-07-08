# Node.js Fundamentals

## What is Node.js?
Node.js is an environment that allows JavaScript to run on the server side.
Thanks to Node, JavaScript no longer depends on the browser and can be used to build APIs, servers, automation scripts, and backend applications.
## How does Node.js differ from running JavaScript in the browser?
JavaScript in the browser is used to manipulate the user interface  everything created for the user to interact with the system, such as buttons, forms, animations, events, and the DOM.

With Node.js, JavaScript can run on the server, where the internal behavior of the system (backend) is defined.
## What is the V8 engine, and how does Node use it?
The V8 engine is the component used by Google Chrome to interpret and compile JavaScript. Because it is fast, stable, and open‑source, Ryan Dahl the creator of Node.js  came up with the idea of taking the V8 engine and using it outside the browser, running it directly on the server.

This engine uses JIT (Just‑In‑Time) compilation: it first executes the code and interprets it this phase is known as Ignition and when it detects code that runs frequently (hot code), it compiles it into machine code so its execution becomes much faster.
## What are some key use cases for Node.js?
APIs
Real‑time applications
Automation
QA testing
Web servers
Microservices
Streaming
CLI tools
Serverless functions
## Explain the difference between CommonJS and ES Modules. Give a code example of each.

CommonJS is JavaScript’s module system designed specifically for the server side (Node.js). It is installed by default in Node and uses require and module.exports.

ES Modules is the official modular system of JavaScript. It works in the browser and also in modern Node.js, using import and export. To use it in Node, you must specify "type": "module" in the package.json. If needed, CommonJS can be imported easily from ESM.

CommonJS is typically used in older Node.js projects and simple scripts, while ES Modules is more common in modern projects because of its compatibility and support for optimizations like tree‑shaking.

**CommonJS (default in Node.js):**
```js
//import
const fs = require('fs');
//export
function readFile(path) {
  return fs.readFileSync(path, 'utf8');
}

module.exports = readFile;
```

**ES Modules (supported in modern Node.js):**
```js
// Import
import fs from 'fs';
// Export
export function readFile(path) {
  return fs.readFileSync(path, 'utf8');
}
``` 