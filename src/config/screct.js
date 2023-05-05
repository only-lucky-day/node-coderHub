const fs = require('fs');
const path = require('path');
// const PRIVATE_KEY = fs.readFileSync('./src/config/keys/private.key');
const PRIVATE_KEY = fs.readFileSync(path.resolve(__dirname, './keys/private.key'), { encoding: 'utf8' });
const PUBLIC_KEY = fs.readFileSync(path.resolve(__dirname, './keys/public.key'), { encoding: 'utf8' });
// const PUBLIC_KEY = fs.readFileSync('./src/config/keys/public.key');

// console.log(PRIVATE_KEY);
// console.log(PUBLIC_KEY);
module.exports = {
  PRIVATE_KEY,
  PUBLIC_KEY,
};
