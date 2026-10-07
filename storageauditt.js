#!/usr/bin/env node

/**
 * =============================================================================
 * STORAGE AUDIT CLI TOOL - storageauditt.js
 * =============================================================================
 * Alias / wrapper langsung untuk storage_audit.js
 * =============================================================================
 */

const audit = require('./storage_audit.js');
if (typeof audit.main === 'function') {
  audit.main();
}
