﻿/*function CustomError(foo, message, fileName, lineNumber) {
  var instance = new Error(message, fileName, lineNumber);
  instance.foo = foo;
  Object.setPrototypeOf(instance, Object.getPrototypeOf(this));
  if (Error.captureStackTrace) {
    Error.captureStackTrace(instance, CustomError);
  }
  return instance;
}

CustomError.prototype = Object.create(Error.prototype, {
  constructor: {
    value: Error,
    enumerable: false,
    writable: true,
    configurable: true
  }
});

if (Object.setPrototypeOf){
  Object.setPrototypeOf(CustomError, Error);
} else {
  CustomError.__proto__ = Error;
}*/

/*
function CustomError() {
    this.Type = "";
    this.IsBadRequest = false;
    this.Message = "";
}
*/

//module.exports = function (data, callback) {
var display = function (data, callback) {
    //throw new Error("something bad happened");
    //var error = new CustomError();
    //error.Type = "BadRequestError";
    //error.IsBadRequest = true;
    //error.Message = "Something bad happened and it was related to a bad client request.";

    //callback(new Error(JSON.stringify(error)));

    if (data.FirstName === "Todd") {
        var error = new Error("'Todd' is not a suitable value for the First Name.");
        error.name = "BadRequestError";
        callback(error);
    }

    //var error2 = new Error("something bad happened");
    //Object.defineProperty(error2, "IsBadRequest");
    //Object.defineProperty(error2, "Type");
    //error2.IsBadRequest = true;
    //error2.Type = "BadRequestError";

    //error2["IsBadRequest"] = true;
    //callback(error2);

    //callback(new Error("something bad happened"));
    //callback(new CustomError('bar', 'What??'));

    callback(null, "Welcome to NodeJS, " + data.FirstName + " " + data.LastName + ".");
};

//display("test", console.log);
return display;