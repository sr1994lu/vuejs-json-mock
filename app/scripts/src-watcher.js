const exec = require('child_process').exec;
const chokidar = require('chokidar');

// Initialize watcher.
const watcher = chokidar.watch('./src', {
  ignored: /node_modules|\.git/,
  persistent: true,
});

watcher.on('change', (e, path) => {
  exec('npm run babe', (error, stdout, stderr) => {
    if (error) {
      console.error(`exec error: ${error}`);
      return;
    }
    console.log(`stdout: ${stdout}`);
    console.log(`stderr: ${stderr}`);
  });
  console.log('changed');
});
