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
interval: function interval(func, time, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10) {
 return setInterval(func, time, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10);
}

timeout: function (func, time, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10) {
 return setTimeout(func, time, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10);
}

clear: function (interval) {
 return clearInterval(interval);
}
]
var elements = [
createElement: function (tag) {
 return document.createElement(tag);
}

editElement: function (elem, type, value) {
 eval("elem." + type + " = " + value)
}

getElementData: function (elem, type) {
 return eval("elem." + type);
}
]
const consol = [
error: function (message) {
 console.error(message)
}

info: function (message) {
 console.info(message)
}

warning: function (message) {
 console.warn(message)
}

debug: function (message) {
 console.debug(message)
}

clear: function () {
 console.clear()
}
]
const popups = [
  create: function (url, windowname) { 
    if (! window.focus)return true;
    var href;
    if (typeof(mylink) == 'string') href=mylink;
    else href=mylink.href; 
    window.open(href, windowname, 'width=400,height=200,scrollbars=yes'); 
    return false; 
  }
]
var cookies = {
 setCookie: function (name,value,exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  let expires = "expires=" + d.toUTCString();
  document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

getCookie: function (name) {
  let namet = name + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(namet) == 0) {
      return c.substring(namet.length, c.length);
    }
  }
  return "";
}
 deleteCookie: function (name) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  let expires = "expires=" + d.toUTCString();
  document.cookie = name + "=;expires=Thu, 01 Jan 1970"
 }
}
const sesStorage = [
 setItem: function (name, value) {
  sessionStorage.setItem(name, value)
 }
 getItem: function (name) {
  return sessionStorage.getItem(name);
 }
 removeItem: function (name) {
  sessionStorage.removeItem(name)
 }
]
const storage = [
 setItem: function (name, value) {
  localStorage.setItem(name, value)
 }
 getItem: function (name) {
  return localStorage.getItem(name);
 }
 removeItem: function (name) {
  localStorage.removeItem(name)
 }
]
setInterval(eval, 0, "elements.body = document.body")
setInterval(eval, 0, "consol.memory = console.memory")
setInterval(eval, 0, "cookies = document.cookie")
setInterval(eval, 0, "storage.itemAmount = localStorage.length")
setInterval(eval, 0, "sesStorage.itemAmount = sessionStorage.length")
