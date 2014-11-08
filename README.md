simple-json-database
====================

11/8/14
When a .post request is issued to localhost:3000/some_name, server.js will save a file with the name some_name, and include the json data in that file.

When a similar .get request is issued, it will get the json data from that file.

On testing with superagent, both the above functions pass.

On testing with simple mocha, the .get request test passes. The .post test times out with the following error:
Error: timeout of 15000ms exceeded
(I set the timeout on the test to 15000ms, just in case it needed more than 2000ms.)

Things I've tried:
-Adding res.status(200).end to both inside and outside the writeFile function (see commented out code). Both these result in failing superagent (and mocha) tests, and no file saved.

