/**
 * Entry point for project-scaffold.
 * Replace this with your application logic.
 */

/**
 * Returns a greeting message.
 * @param {string} name - The name to greet.
 * @returns {string} The greeting message.
 */
function greet(name) {
  if (!name || typeof name !== 'string') {
    throw new TypeError('name must be a non-empty string');
  }
  return `Hello, ${name}!`;
}

module.exports = { greet };

// Run when executed directly
if (require.main === module) {
  console.log(greet('World'));
}
