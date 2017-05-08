(function(){

/**
 * Attempts to determine if it is being called inside a macOS “JavaScript for Automation” (JXA)
 * context. (**nota bene**, this is the exported value for the `detect-jxa` module; and it's exposed
 * globally if the environment doesn't provide `exports`.)
 *
 * @global
 *
 * @example <caption>In Browserify, or another CommonJS-based system</caption>
 * const detectJXA = require('detect-jxa')
 *     , isJXA = detectJXA()
 * // ... or, just:
 * const isJXA = require('detect-jxa')()
 *
 * if (isJXA)
 *    let something = Library('something')
 * else
 *    let something = require('something')
 */
function detectJXA(){
   try {

      if (typeof Automation                  === 'object'
       && typeof Automation.getDisplayString === 'function'
       && typeof $                           === 'function'
       && Automation.getDisplayString($())   === '$()')
         return new Object

      else
         return false

   } catch (e) {
      return false
   }
}

// If this isn't inside Node.js, we expose `detectJXA` as a global.
if      (typeof exports           === 'undefined')                            {
   const global = (function(){ return this })()
         global.detectJXA = detectJXA                                         }
else if (typeof exports.detectJXA === 'undefined')                            {
   exports.detectJXA = detectJXA
   exports.default   = detectJXA                                              }

return detectJXA
})()
