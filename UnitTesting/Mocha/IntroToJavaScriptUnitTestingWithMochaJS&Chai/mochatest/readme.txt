Originally from https://www.youtube.com/watch?v=MLTRHc5dk6s

Basic Ideas

npm init

entry point is app.js (need to create that file)

npm install mocha chai --save -dev

In package.json, where it says:  

 "echo \"Error: no test specified\" && exit 1"

 replace it with 

 "mocha"

 Mocha looks for folder called "test" so create that folder in directory with package.json

 Create file appTest.js

 require chai assertion library 
 npm run test 
 npm run test -s to only show result (what passed/failed)
 if you don't want to do it throughout everything, in package.json, in test, put "mocha || true"





  

