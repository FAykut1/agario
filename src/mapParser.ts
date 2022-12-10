import tmx from 'tmx-parser';
// const tmx = require('tmx-parser');
async function parse() {
  return await new Promise((resolve, reject) => {
    tmx.parseFile('./src/map.tmx', function (err, map) {
      if (err) return reject(err);
      return resolve(map);
    });
  });
}

export default parse;
