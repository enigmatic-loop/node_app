const { readFile, writeFile } = require('fs');

console.log('starting this task');
readFile('./content/first.txt', 'utf-8', (err, result) => {
  if (err) {
    console.log(err);
    return
  }
  const first = result;
  readFile('./content/second.txt', 'utf-8', (err, result) => {
    if (err) {
      console.log(err);
      return
    }
    const second = result;

  writeFile(  './content/result-async.txt',
    `Here is the result: ${first}, ${second}`,
    (err, result) => {
    if (err) {
      console.log(err)
      return;
    }
    console.log(result)
    console.log('fully done');
    })
  })
})
console.log('now starting this, while the previous is finishing');