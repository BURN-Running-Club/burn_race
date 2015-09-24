# BURN RACE


## system

Building new burn race website and webapps with mean.io. http://mean.io/. This
is a fullstack javascript framework with Mongodb, Express, Angularjs, Nodejs.

For local installation please refer to original README.mean.md. 

### Quick commond history for Mac OS Yosemite.

* install homebrew

```
ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

* install framework dependencies

```
npm install node
brew install mongodb
npm install -g gulp
npm install -g bower
```

* create local mongodb database and user

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

* install burn race package

```
git clone github.com/BURN-Running-Club/burn_race burn_race
cd burn_race
npm install
```


