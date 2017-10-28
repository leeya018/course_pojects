const { URL } = require('url');
// const myURL = new URL('https://example.org:3000/foo#bar?');
const myURL = new URL('https://example.org/lee.css');
console.log(myURL.hash);
console.log(myURL.host);
console.log(myURL.href);
console.log(myURL.origin);
console.log(myURL.pathname);
console.log(myURL.port);
console.log(myURL.search);

const myURL1 = new URL('https://example.org/lee.css');
console.log(myURL1.search);