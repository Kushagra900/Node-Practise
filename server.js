//different modules in js

//fs module creates a file and adds a message inside it.

//os gives detail about the user

var fs = require('fs')
var os = require('os')

var user = os.userInfo()
console.log("User Details: ", user)