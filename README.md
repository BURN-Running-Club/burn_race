# BURN RACE

Building new burn race website and webapps with mean.io. http://mean.io/. This
is a fullstack javascript framework with Mongodb, Express, Angularjs, Nodejs.

For local installation please refer to original README.mean.md. 

## Installation (OS and Linux)

* Install framework dependencies

The best to install node is through nvm. The OS maintained packages (through brew or 
apt-get) is very outdated, and not easy to specify node version.

```
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.26.1/install.sh | bash

nvm install 0.10 
npm install -g nodemon 
npm install -g bower
```

* Create local mongodb database and user

```
brew install mongodb (Mac)
or
apt-get install mongodb (Ubuntu)
```

start mongodb, create users according to what we need in config.js
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

* Install burn race packages

```
git clone github.com/BURN-Running-Club/burn_race burn_race
cd burn_race
npm install
bower install
```

Run the server with nodemon


* Compile frontend assets, etc.

We use gulp to do several tasks, including 
1. generate final app.css from multiple less files
2. check js to make sure good coding style
3. generate final app.js from multiple js files
etc.

Before loading page, please run gulp manually. We will automate it later.

```
gulp
```

* Start the server

```
nodemon 
```

Once all packages are installed, you can visit your homepage at 
http://localhost:8100


