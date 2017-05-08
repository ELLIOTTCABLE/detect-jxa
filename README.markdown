`detect-jxa`
============
This is a simple micro-package to provide a function to determine if the current JavaScript
environment is the [JavaScript for Automation (‘JXA’)][jxa] environment provided on Mac OS X / macOS
versions 10.10 (‘Yosemite’) and later. *(See also: [JXA-Cookbook][])*

This allows you to branch behaviour depending on whether JXA's globals will be available or not:

```es6
const onJXA = require('detect-jxa')()

if (onJXA)
   require('jxa-async/shim')
```

   [jxa]: https://developer.apple.com/library/content/releasenotes/InterapplicationCommunication/RN-JavaScriptForAutomation/Articles/OSX10-10.html#//apple_ref/doc/uid/TP40014508-CH109-SW1
      "JavaScript for Automation Release Notes"
   [JXA-Cookbook]: https://github.com/dtinth/JXA-Cookbook
      "JavaScript for Automation Cookbook on GitHub"

Installation
------------
 - DOCME

{{#function name="detectJXA"}}
{{>header~}}
{{>body~}}
{{/function}}

License
-------
© 2017 ELLIOTTCABLE. `detect-jxa` is [available under][LICENSE] the [ISC license][].

   [LICENSE]: /ELLIOTTCABLE/detect-jxa/blob/Master/LICENSE.txt "detect-jxa's LICENSE.txt"
   [ISC license]: https://tldrlegal.com/license/-isc-license
      "The ISC license, explained in plain English"
