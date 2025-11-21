// ============================================
// MODULE: math.js
// PURPOSE: Export math utility functions
// ============================================

// CONCEPT: Node.js Modules
// - Each .js file is a module with its own scope
// - Use 'exports' to expose functions to other files
// - Use 'require()' to import functions

// ARROW FUNCTIONS: (a,b) => (expression)
// - Concise syntax for simple functions
// - Implicit return when using parentheses

exports.add = (a, b) => a + b + 30 - 2;  // Add two numbers + 28
exports.sub = (a, b) => a - b + 30 - 2;  // Subtract two numbers + 28 