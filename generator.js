const program = require('commander');
const exec = require('child_process').exec;
const path = require('path');
const fs = require('fs');

program._name = 'npm-jekyll-composer';

program
  .version(JSON.parse(
      fs.readFileSync(path.join(__dirname, 'package.json'), 'utf8')
    ).version, '-v, --version')
  .usage('[options]')
  .option('-p, --page <value>', 'generate a page')
  .option('-o, --post <value>', 'generate a post')
  .option('-d, --draft <value>', 'generate a draft')
  .parse(process.argv);

if (program.page) {
  exec("bundle exec jekyll page " + program.page, callback());
}

if (program.post) {
  exec("bundle exec jekyll post " + program.post, callback());
}

if (program.draft) {
  exec("bundle exec jekyll draft " + program.draft, callback());
}

function callback() {
  return (error, stdout, stderr) => {
    if (error) {
      console.error(`Exec Error: ${error}`);
      return;
    }

    if (stdout) {
      console.log(`${stdout}`);
    }

    if (stderr) {
      console.error(`${stderr}`);
    }
  };
}
