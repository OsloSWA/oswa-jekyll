# OSWA Jekyll Template

OSWA Jekyll website repo.

Goto http://osloswa.github.io

# Setup

First install `Ruby` to compile the sources, then install `Bundler` to build the project. See below.

### Correctly installing Ruby (MacOS)

1. Install latest version of Ruby using HomeBrew:

```
$ brew install ruby
```

This will download and install Ruby, but Brew will not link it to your system path. We fix that by adding the necessary environment variables in the next two sections.

2. Add the following to your `.bash_profile` file:

```
export PATH="/usr/local/opt/ruby/bin:$PATH"                    
export LDFLAGS="-L/usr/local/opt/ruby/lib"
export CPPFLAGS="-I/usr/local/opt/ruby/include"
export PKG_CONFIG_PATH="/usr/local/opt/ruby/lib/pkgconfig"
```  

MacOS has already an older version of Ruby bundled, so these environment variables will link Ruby to our own version and also make sure other tools can find it.

3. Add the following to your `.bashrc` file:

```
export GEM_HOME=$HOME/gems
export PATH=$HOME/gems/bin:$PATH

```

These environment variables will allow you to build (using Bundler) Ruby projects without needing admin access to protected Mac OS folder. Ruby Gems will be installed in your Users folder instead of the system folders.

### Install the project (MacOS)

4. Install `Bundler`:

`gem install bundler`

5. Install project:

`bundle install`
