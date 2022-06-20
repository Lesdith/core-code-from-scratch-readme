javascript
const { sum, subs } = require("./operations");

let Core = 0.5;
let Code = 0.5;
const CoreCode = sum(Core, Code);

Code = subs(CoreCode, Core);
Core = subs(CoreCode, Code);
