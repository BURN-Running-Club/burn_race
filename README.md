# BURN RACE

## system

Building new burn race website and webapps with mean.io. http://mean.io/. This
is a fullstack javascript framework with Mongodb, Express, Angularjs, Nodejs.

For local installation please refer to original README.mean.md. 

### Installation (OS and Linux)

* Install framework dependencies

The best to install node is through nvm. The OS maintained packages (through brew or 
apt-get) is very outdated, and not easy to specify node version.

```
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.26.1/install.sh | bash

nvm install 0.10 
npm install -g gulp (optional for now)
npm install -g nodemon (optional for now)
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

* Install burn race package and start server

```
git clone github.com/BURN-Running-Club/burn_race burn_race
cd burn_race
npm install
```

```
nodemon 
or
node server.js
```

It may complain missing packages. Install all of them and save to package.json with the --save option, 
so that other programmer will only need to run npm install. For example:

```
Error: Cannot find module 'jsonwebtoken'.

npm install jsonwebtoken --save
```

Once all packages are installed, you can visit your homepage at 
http://localhost:8100

