#!/usr/bin/env node

/**
 * Main entry point for the Slippers CLI
 */

import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import * as fs from 'fs';
import { runCliPrompts } from './cliPrompts/runCliPrompts.js';

async function run(): Promise<void> {
  await runCliPrompts()
}

run().catch((error) => {
  console.error(error.message);
  process.exit(1);
});