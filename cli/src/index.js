/**
 * Main entry point for the Slippers CLI
 */

function showHelp() {
  console.log(`
  slippers - Keeping Barefoot Developers Feet Warm

  Usage:
    slippers [command] [options]

  Commands:
    help      Show this help message
    version   Show version information

  Options:
    --help, -h     Show this help message
    --version, -v  Show version information
  `);
}

function showVersion() {
  // Read version from package.json
  const packageJson = require('../package.json');
  console.log(`slippers v${packageJson.version}`);
}

function run(args) {
  if (args.length === 0 || args.includes('--help') || args.includes('-h')) {
    showHelp();
    return;
  }

  if (args.includes('--version') || args.includes('-v') || args.includes('version')) {
    showVersion();
    return;
  }
  
  console.log('Arguments received:', args);
  // Implement CLI logic here
}

module.exports = {
  run
}; 