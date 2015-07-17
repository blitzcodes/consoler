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
	enabled  : !!(window.console),
	/*************
	 * Private
	 ************/
	_msg(type, args) {
		// If console isn't available, or no args were sent, or call type is missing, bypass
		if(!consoler.enabled || !args.length || typeof window.console[type] !== 'function')
			return;
	
		window.console[type].apply(window.console, args);
	},
	/*************
	 * Public
	 ************/
	log() {
		consoler._msg('log', arguments);
	},
	warn() {
		consoler._msg('warn', arguments);
	},
	error() {
		consoler._msg('error', arguments);
	},
	trace() {
		consoler._msg('trace', arguments);
	},
	group(label) {
		if(consoler.enabled && typeof window.console.groupEnd == 'function') {
			window.console.groupCollapsed(label);
		}
	},
	groupEnd : function(label) {
		if(consoler.enabled && typeof console.groupEnd == 'function') {
			window.console.groupEnd();
		}
	}
};

export default consoler;
