const dates = {
 current: function () {
  var date = new Date();
  return date;
 },
 new: function (datestring) {
  var date = new Date(datestring);
  return date;
 }
};
const intervals = [
function interval(func, time, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10) {
 return setInterval(func, time, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10);
}

function timeout(func, time, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10) {
 return setTimeout(func, time, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10);
}

function clearInterval(interval) {
 return clearInterval(interval);
}
]
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

var body = document.body
]
const consol = [
function error(message) {
 console.error(message)
}

function info(message) {
 console.info(message)
}

function warning(message) {
 console.warn(message)
}

function debug(message) {
 console.debug(message)
}

function clear() {
 console.clear()
}

var memory = console.memory
]
const popups = [
  function create(url, windowname) { 
    if (! window.focus)return true;
    var href;
    if (typeof(mylink) == 'string') href=mylink;
    else href=mylink.href; 
    window.open(href, windowname, 'width=400,height=200,scrollbars=yes'); 
    return false; 
  }
]
var cookies = document.cookie
const sesStorage = [
 function setItem(name, value) {
  sessionStorage.setItem(name, value)
 }
 function getItem(name) {
  return sessionStorage.getItem(name);
 }
 function removeItem(name) {
  sessionStorage.removeItem(name)
 }
 var itemAmount = sessionStorage.length
]
const storage = [
 function setItem(name, value) {
  localStorage.setItem(name, value)
 }
 function getItem(name) {
  return localStorage.getItem(name);
 }
 function removeItem(name) {
  localStorage.removeItem(name)
 }
 var itemAmount = localStorage.length
]
setInterval(eval, 0, "elements.body = document.body")
setInterval(eval, 0, "consol.memory = console.memory")
setInterval(eval, 0, "cookies = document.cookie")
setInterval(eval, 0, "storage.itemAmount = localStorage.length")
setInterval(eval, 0, "sesStorage.itemAmount = sessionStorage.length")
