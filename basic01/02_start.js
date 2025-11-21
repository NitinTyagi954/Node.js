// ============================================
// FILE: start.js
// PURPOSE: Test Node.js module imports
// ============================================

// SETUP PROCESS:
// 1) npm init - Initialize Node.js project
// 2) Create modules and require them

// KEY DIFFERENCES: Node.js vs Browser
// - Node.js: No 'window' object (no DOM)
// - Browser: Has 'window' object, DOM manipulation
// - Node.js: CommonJS modules (require/exports)

// IMPORT SYNTAX:
// Option 1: Import entire module
const math = require('./01_math');
// - './' refers to current directory
// - Imports all exports from math.js

// Option 2: Destructuring (commented out)
// const {add_num, sub_num} = require('./math');
// - Extracts specific exports
// - More concise when using named exports

// EXECUTION:
console.log(math.add(3, 2));   // Output: 33 (3+2+28)
console.log(math.sub(3, 2));   // Output: 29 (3-2+28)
