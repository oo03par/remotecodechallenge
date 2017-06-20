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