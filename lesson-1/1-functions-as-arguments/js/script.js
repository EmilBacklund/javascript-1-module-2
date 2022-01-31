// These are often called callbacks. It is very common
// to pass functions as arguments to other ***
// functions and have the receiving function execute them.

// IIFE = Instantly Invoked Function Expression
// Normal way of creating function, you have to call it manually normally

function showMessage() {
  console.log("Hello one");
}

showMessage();

// IIFE = Immediately Invoked Function Expression
// This function calls itself immediately
(function doSomething() {
  console.log("hello two");
})();

// Calback functions:
function logTheArgument(someFunction) {
  console.log(someFunction);
}

logTheArgument(function () {
  console.log("I am a callback function :) ");
});

// Code along:

function logSomething(someArgument) /* one parameter */ {
  console.log("This is the type of a: " + typeof someArgument);
}

logSomething("Emil");

const obj = {};

logSomething(obj);

const someArray = [];

logSomething(someArray);

// *****

function justSomeFunction() {
  console.log("Hello I am a happy function");
}

logSomething(justSomeFunction);
// This is the type of a: Function

const justAHappyFunction = function () {
  console.log("Hello I am a happy function 2");
};

logSomething(justAHappyFunction);

//

function logMyName(arg1, arg2) {
  console.log("Firstname is: " + arg1 + " " + "Lastname is: " + arg2);
}

logMyName("Emil", "Backlund");

//

(function logMyName2() {
  console.log("Emil Backlund");
})();

//

logMyName3("Emil", "Backlund");

function logMyName3(arg1, arg2) {
  console.log("Firstname is: " + arg1 + " " + "Lastname is: " + arg2);
}

//

// This will give error
logMyName4("Emil", "Backlund");

const logMyName4 = function (arg1, arg2) {
  console.log("Firstname is: " + arg1 + " " + "Lastname is: " + arg2);
};

//
