# OSWA Jekyll Template

OSWA Jekyll website repo.

Goto http://osloswa.github.io

# Setup

First install `Ruby` to compile the sources, then install `Bundler` to build the project. See below.

Using Windows? See [here](https://jekyllrb.com/docs/installation/windows/).
Using Linux? See [here](https://jekyllrb.com/docs/installation/ubuntu/)

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

Reload the `.bash_profile` file to read in the environment variables:

```
source ~/.bash_profile
```  

3. Add the following to your `.bashrc` file:

```
export GEM_HOME=$HOME/gems
export PATH=$HOME/gems/bin:$PATH
```  

These environment variables will allow you to build (using Bundler) Ruby projects without needing admin access to protected Mac OS folders. The variables set the default Gem path to your users folder, which also enables dependencies for other projects to be installed in the users folder (instead of system folders).

Reload the `.bashrc` file to read in the environment variables:

```
source ~/.bashrc
```  

### Install the project (MacOS)

4. Install `Bundler` and `Jekyll`:

`gem install bundler jekyll`

5. Install project:

`bundle install`

### Known issues

#### Cannot build Gem / native extension xxxxxxxx (MacOS)

The bundled version of Ruby in MacOS, has known issues around building native extensions to Ruby. This is partly because of the MacOS System Integrity Protection (SIP) that reduces access to system folders and partitions. Don't disable the SIP, many older and outdated answers on StackOverflow recommend it, but doing so will cause a lot of other problems.

If you encounter a problem around building the project (such as failure to build the Nokogiri-extension), then make sure that the environment variables is correctly set and loaded. Run the following command to check:

`env`

Also make sure that you actually run the newly installed version of Ruby:

`ruby -v`
