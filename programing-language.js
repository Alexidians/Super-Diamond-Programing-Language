var dates = [
 function current() {
  var date = new Date();
  return date;
 }

 function new(datestring) {
  var date = new Date(datestring);
  return date;
 }
]
function interval(func, time, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10) {
 return setInterval(func, time, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10);
}

function timeout(func, time, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10) {
 return setTimeout(func, time, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10);
}

function clearTimeout(timeout) {
 return clearInterval(timeout);
}

function clearInterval(interval) {
 return clearInterval(interval);
}

var elements = [
function createElement(tag) {
 return document.createElement(tag);
}

function editElement(elem, type, value) {
 eval("elem." + type + " = " + value)
}

function getElementData(elem, type) {
 return eval("elem." + type);
}

function body() {
 return document.body;
}
]
