# OSWA Jekyll Template

OSWA Jekyll website repo.

Goto http://osloswa.github.io

# Setup

First install `Ruby` to correctly compile the sources, then install `Bundler` to build the project. See below.

### Correctly installing Ruby (MacOS)

Install Ruby using HomeBrew:

```
$ brew install ruby
```

1. Add the following to your `.bash_profile` file:

```
export PATH="/usr/local/opt/ruby/bin:$PATH"                    
export LDFLAGS="-L/usr/local/opt/ruby/lib"
export CPPFLAGS="-I/usr/local/opt/ruby/include"
export PKG_CONFIG_PATH="/usr/local/opt/ruby/lib/pkgconfig"
```  

2. Add the following to your `.bashrc` file:

```
export GEM_HOME=$HOME/gems
export PATH=$HOME/gems/bin:$PATH

```

### Install the project (MacOS)

3. Install `Bundler`:

`gem install bundler`

Install project:

`bundle install`
