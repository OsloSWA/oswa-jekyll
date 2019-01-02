# osloswa.github.com

OSWA Jekyll website repo.

Goto http://osloswa.github.io

# Setup

First install Ruby correctly, then install bundler. See below.

### Correctly installing Ruby on MacOS

Install Ruby using HomeBrew:

```
$ brew install ruby
```

Add the following to your .bash_profile file:

```
export PATH="/usr/local/opt/ruby/bin:$PATH"                    
export LDFLAGS="-L/usr/local/opt/ruby/lib"
export CPPFLAGS="-I/usr/local/opt/ruby/include"
export PKG_CONFIG_PATH="/usr/local/opt/ruby/lib/pkgconfig"

```

Add the following to your .bashrc file:

```
export GEM_HOME=$HOME/gems
export PATH=$HOME/gems/bin:$PATH

```

### Install the project (MacOS)

Install `Bundler`:

`gem install bundler`

Install project:

`bundle install`
