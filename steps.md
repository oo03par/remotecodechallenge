# Steps to create application

This assumes Node is already installed on your system - if not, see step 0

## Step 0 - Installing Node
TBD

## Step 1 - Initialise Node

In a new, empty directory, run the following command to initialise your node application. You can accept default values for now:

`npm init`

If you wish to, you can change the default application entry point to, e.g. `app.js`

## Step 2 - Set up testing framework

For this application, I will be using mocha and chai. (Mocha)[https://mochajs.org/] is a JavaScript test framework for Node which allows asynchronous testing. (Chai)[http://chaijs.com/] is a BDD style assertion library, which also has an HTML "add-on".

To add these into the dependencies, we need to edit the _package.json_ file which NPM created in step 1.

If there is not an object node in _package.json_ for *devDependencies*, you will need to add one in, making sure that it has the following three values:

```javascript
"devDependencies": {
	"chai": "^3.5.0",
	"chai-http": "^2.0.1",
	"mocha": "^2.4.5"
}
```

You can also add a line into the scripts object to set the value for the test script, as follows:

```javascript
"scripts":{
	"test": "node_modules/.bin/mocha -w"
}
```

Once you have finished editing your _package.json_ file, you will need to run the following command to update your node installation:

`npm update`

## Step 3 - Writing a failing test

Add a new file into the project root, called _mocha.opts_. Inside this file, add the following:

```
--require should
--reporter spec
--ui bdd
--recursive
```

Create a new folder under the project root, called _test_.

Inside this folder, create a new file called _app.js_. This will be the main test for your application.

To this file, add the following code:

```javascript
'use strict';

describe('application', function() {
	it('should intentionally fail', function(done) {
		throw new Error('this is a failure');
	});
});
```

Now, at the command line, you can run 

`npm test`

which will fail.

## Step 4 - TDD for fun and profit

### Remove temporary test, and add new application test

Change the contents of the test, removing the "should intentionally fail" test, and adding a new test for the application running on the correct port.

```javascript
'use strict';

let chai = require('chai');
let chaiHttp = require('chai-http');
let app = require('../app');
let should = chai.should();

chai.use(chaiHttp);

describe('application', function() {
	it('should have a default ok request', function(done) {
		chai
			.request(app)
			.get('/')
			.end((err, res) => {
				res.should.have.status(200);
				done();
			})
	});
});
```

Now, running `npm test` you will get a failure 'Cannot find module app'. This is expected, as we have not yet created it!

### Adding application module, and installing Express

Create a file in the root of the project called _app.js_. This will be our application entry point.

As this application is going to use Express, run the following command, which will install Express and add it into the Node dependencies (you'll notice the _package.json_ will update):

`npm install express --save`

Run your test script again, using `npm test`. You'll have another error message - hopefully something about app.address is not a function. This is expected, as we have not added any code into our application yet.

### Creating empty Express application

In the newly created _app.js_, add the following:

```javascript
'use strict';

const express = require('express')
const app = express()

let port = 8080;

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.listen(port, function () {
  console.log('Application running')
})

module.exports = app // for testing
```

> Note - if you do not add the final line about module.exports, your test will fail with an error similar to "app.address is not a function"

Next run your test again; you should have a green test. Congratulations - you have written a TDD app.