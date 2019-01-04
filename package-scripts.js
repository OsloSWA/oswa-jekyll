'use strict';

module.exports = {
  scripts: {
    build: {
      default: {
        script: 'nps build.clean build.dev',
        description: 'Default build step that builds site in dev mode.'
      },
      dev: {
        script: 'nps build.clean && bundle exec jekyll build --config _config.yml,_config_dev.yml',
        description: 'Builds site in dev mode.'
      },
      github: {
          script: 'nps build.clean && bundle exec jekyll build --config _config.yml,_config_githubpages.yml',
          description: 'Builds site in GitHub mode (deployable to GitHub Pages).'
      },
      oswano: {
          script: 'nps build.clean && bundle exec jekyll build --config _config.yml,_config_oswa_no.yml',
          description: 'Builds site in prod mode.'
      },
      clean: {
        script: 'bundle exec jekyll clean && rimraf docs',
        description: 'Clean up.',
      },
    },
    test: {
      script: 'npm run build && bundle exec htmlproofer ./docs --url-ignore "/tags/" --internal-domains "localhost:4000" --check-html --allow-hash-href --check_opengraph',
      description: 'Tests the site.'
    },
    serve: {
      script: 'bundle exec jekyll serve --config _config.yml,_config_dev.yml',
      description: 'Runs the site in dev mode. Accessible at http://localhost:4000.'
    }
  }
};
