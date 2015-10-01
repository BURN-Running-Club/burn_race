# BURN RACE

Building new burn race website and webapps with MEAN system, Mongo, Express, Angularjs, and Nodejs. 

## Installation

### Install framework dependencies

The best to install node is through nvm. The OS maintained packages (through brew or 
apt-get) is very outdated, and not easy to specify node version.

```
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.26.1/install.sh | bash

nvm install 0.10 
npm install -g nodemon 
npm install -g bower
```

### Local mongodb database and user

```
brew install mongodb (Mac)
or
apt-get install mongodb (Ubuntu)
```

* Start mongodb on Mac:

```
ln -sfv /usr/local/opt/mongodb/*.plist ~/Library/LaunchAgents
// auto start mongodb at login
launchctl load ~/Library/LaunchAgents/homebrew.mxcl.mongodb.plist
```

* Create user and db.

```
mongo
use burn-race
db.createUser(
  {
    user: "admin",
    pwd: "burn2015",
    roles: [ { role: "userAdmin", db: "burn-race" } ]
  }
)
```

## Let's BURN it.

```
git clone github.com/BURN-Running-Club/burn_race burn_race
cd burn_race
npm install
bower install

gulp
nodemon 
```

Once all packages are installed, you can visit your homepage at 
http://localhost:8100


## Plans and code designs.

### TODO list

Once finished, just note it here with commit. 

* UI captcha

Used to use php to generate captcha image. We can use angularjs captcha.

* mailer

Used to use php to send mail. We need to use nodejs here.

* race result

Need UI design and mongodb solutions.
