'use strict';
/**
 * @module consoler
 */

/**
 * A basic ES6 console fail safe wrapper
 */
let consoler = {
  /*************
   * Params
   ************/
  enabled: !!(window.console),
  /*************
   * Private
   ************/
    _msg(type, args) {
    // If console isn't available, or no args were sent, or call type is missing, bypass
    if (!this.enabled || !args.length || typeof window.console[type] !== 'function') {
      return;
    }

    window.console[type].apply(window.console, args);
  },
  /*************
   * Public
   ************/
    log() {
    this._msg('log', arguments);
  },
  warn() {
    this._msg('warn', arguments);
  },
  error() {
    this._msg('error', arguments);
  },
  trace() {
    this._msg('trace', arguments);
  },
  group(label) {
    if (this.enabled && typeof window.console.groupEnd == 'function') {
      window.console.groupCollapsed(label);
    }
  },
  groupEnd: function () {
    if (this.enabled && typeof console.groupEnd == 'function') {
      window.console.groupEnd();
    }
  }
};

export default consoler;
