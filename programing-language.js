const SuperDiamondObjectCreator = {
 toString: function() {
  return "[object SuperDiamondObjectCreator]";
 }
 SuperDiamondInterval: function(func, time, param1, param2, param3, param4, param5, param6, param7, param8, param9, param10) {
  var interval = setInterval(func, time, param1, param2, param3, param4, param5, param6, param7, param8, param9, param10)
  var ModifiedInterval = {
   toString: function() {
    return "[object SuperDiamondInterval]";
   }
  }
  ModifiedInterval.data = interval + "/Super-Diamond-Interval"
  ModifiedInterval.id = interval
 },
 SuperDiamondTimeout: function(func, time, param1, param2, param3, param4, param5, param6, param7, param8, param9, param10) {
  var timeout = setTimeout(func, time, param1, param2, param3, param4, param5, param6, param7, param8, param9, param10)
  var ModifiedTimeout = {
   toString: function() {
    return "[object SuperDiamondTimeout]";
   }
  }
  ModifiedTimeout.data = timeout + "/Super-Diamond-Timeout"
  ModifiedTimeout.id = timeout
 }
}
function isKeyPressed(keyName) {
 try {
  return eval("keyPressed." + keyName);
 }
 catch(err) {
  return false;
 }
}
const multiFunctions = {}
function setMultifunction(name, functions) {
 var functionsS = functions[0]
 for (let i = 1; i < functions.length; i++) {
  functionsS = functionsS + "," + functions[i] 
 }
 eval("multiFunctions." + name + " = " + functionsS)
}
function execMultifunction(name) {
 var functions = eval("multiFunctions." + name).split(",")
 for (let i = 0; i < functions.length; i++) {
  eval(functions[i]) 
 }
}
window.addEventListener("keyup", function(e) { eval("pressedKeys." + e.code.split("Key")[e.code.split("Key").length] + " = false")});
window.addEventListener("keydown", function(e) { eval("pressedKeys." + e.code.split("Key")[e.code.split("Key").length] + " = true")});
const keyPressed = {}
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
const intervals = {
interval: function interval(func, time, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10) {
 return SuperDiamondObjectCreator.SuperDiamondInterval(func, time, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10);
},
timeout: function (func, time, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10) {
 return SuperDiamondObjectCreator.SuperDiamondTimeout(func, time, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10);
},
clearInterval: function (interval) {
 var intervalSplit = interval.data.split("/")
 var intervalID = parseInt(intervalSplit[0])
 if(intervalSplit[1] == "Super-Diamond-Interval") {
  clearInterval(intervalID);
 }
},
clearTimeout: function (timeout) {
 var timeoutSplit = timeout.data.split("/")
 var timeoutID = parseInt(timeoutSplit[0])
 if(timeoutSplit[1] == "Super-Diamond-Timeout") {
  clearInterval(timeoutID)
 }
}
}
var elements = {
createElement: function (tag) {
 return document.createElement(tag);
},

editElement: function (elem, type, value) {
 eval("elem." + type + " = " + value)
},

getElementData: function (elem, type) {
 return eval("elem." + type);
},

bottomStick: function (element) {
 element.style.position = "fixed"
 element.style.bottom = 0
},

topStick: function (element) {
 element.style.position = "fixed"
 element.style.top = 0
}
}
const consol = {
error: function (message) {
 console.error(message)
},

info: function (message) {
 console.info(message)
},

warning: function (message) {
 console.warn(message)
},

debug: function (message) {
 console.debug(message)
},

clear: function () {
 console.clear()
},
}
const popups = {
  create: function (url, windowname) { 
    if (! window.focus)return true;
    var href;
    if (typeof(url) == 'string') href=url;
    else href=url.href; 
    return window.open(href, windowname, 'width=400,height=200,scrollbars=yes');
  },

 MsgBox: function (text, iconurl, title) {
  var msgbox = popups.create("https://alexidians.github.io/Super-Diamond-Programing-Language/files/popups/MsgBox.html", title)
  msgbox.eval("runmessage('" + text + "', '" + iconurl + "', '" + title + "')")
 },

 alert: function (text) {
  alert(text)
 },

 prompt: function (text) {
  return prompt(text);
 },

 confirm: function (text) {
  return confirm(text);
 }
}
var cookies = {
 function() {
  return document.cookie
 }
 setCookie: function (name,value,exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  let expires = "expires=" + d.toUTCString();
  document.cookie = name + "=" + value + ";" + expires + ";path=/";
},

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
},
 deleteCookie: function (name) {
  document.cookie = name + "=;expires=Thu, 01 Jan 1970"
 }
}
const sesStorage = {
 setItem: function (name, value) {
  sessionStorage.setItem(name, value)
 },
 getItem: function (name) {
  return sessionStorage.getItem(name);
 },
 removeItem: function (name) {
  sessionStorage.removeItem(name)
 }
}
const storage = {
 setItem: function (name, value) {
  localStorage.setItem(name, value)
 },
 getItem: function (name) {
  return localStorage.getItem(name);
 },
 removeItem: function (name) {
  localStorage.removeItem(name)
 }
}
const ads = {
 createElem: function (url, iconurl, width, height) {
  var ad = document.createElement("div")
  ad.class = "ad"
  ad.addEventListener('click', function handleClick(event) {
   open(url)
  });
  var adimg = document.createElement("img")
  adimg.src = iconurl
  adimg.width = width
  adimg.height = height
 },
 setPage: function(type, src) {
  ads.pageElem.style.display = "block"
  switch (expr) {
  case 'html':
    
    break;
  default:
    console.log(`Sorry, we are out of ${expr}.`);
  }
 },
 exitPage: function() {
  ads.pageElem.innerHTML = ""
 }
}
ads.pageElem = document.createElement("div")
ads.pageElem.style.display = "none"
document.body.appendChild(ads.pageElem)
const geoLocation = {
 permissionRequest: function () {
  navigator.geoLocation.getCurrentPosition()
 },

 permission: function () {
  navigator.permissions.query({ name: "geolocation" }).then((result) => {
   return result.state;
  });
 },

 latitute: function () {
  navigator.permissions.query({ name: "geolocation" }).then((result) => {
    if (result.state === "granted") {
     navigator.geolocation.getCurrentPosition((position) => {
      return position.coords.latitude;
     });
    } else if (result.state === "prompt") {
     navigator.geoLocation.getCurrentPosition()
     console.warn("User Has Permissions Prompt for geoLocation. Please try running the function again")
     return "WARNING: User has Permissions Prompt. Please Try Again";
    } else if (result.state === "denied") {
     console.error("User has Denied geoLocation permissions")
     return "ERROR: User has Denied geoLocation permissions";
    }
  });
 },

 longtitute: function () {
  navigator.permissions.query({ name: "geolocation" }).then((result) => {
    if (result.state === "granted") {
     navigator.geolocation.getCurrentPosition((position) => {
      return position.coords.longtitute;
     });
    } else if (result.state === "prompt") {
     navigator.geoLocation.getCurrentPosition()
     console.warn("User Has Permissions Prompt for geoLocation. Please try running the function again")
     return "WARNING: User has Permissions Prompt. Please Try Again";
    } else if (result.state === "denied") {
     console.error("User has Denied geoLocation permissions")
     return "ERROR: User has Denied geoLocation permissions";
    }
  });
 }
}

const windowStorage = {
 setItem: function (name, value) {
  eval("windowStorage." + name + " = " + value)
 },

 getItem: function (name) {
  return eval("windowStorage." + name);
 }
}

const battery = {}
setInterval(eval, 0, "elements.body = document.body")
setInterval(eval, 0, "consol.memory = console.memory")
setInterval(eval, 0, "storage.itemAmount = localStorage.length")
setInterval(eval, 0, "sesStorage.itemAmount = sessionStorage.length")
setInterval(function () {
 navigator.getBattery().then((batteryMng) => {
  battery.amount = batteryMng.level;
  battery.charging = batteryMng.charging;
  battery.timeUntilFull = batteryMng.chargingTime
  battery.timeUntilEmpty = batteryMng.dischargingTime
});
}, 0);
const secrets = {
 secretify: function(stringToSecretify) {
  var array = stringToSecretify.split("")
  var secretifiedString = array[0].charCodeAt()
for (let i = 1; i < array.length; i++) {
  secretifiedString = secretifiedString + ", " + array[i].charCodeAt()
}
  return secretifiedString;
 },

 secretifyCode: function(codeToSecretify) {
  var array = codeToSecretify.split("")
  var secretifiedCode = array[0].charCodeAt()
for (let i = 1; i < array.length; i++) {
  secretifiedCode = secretifiedCode + ", " + array[i].charCodeAt()
}
  return "eval(String.fromCharCode(" + secretifiedCode + "))"
 },

 unsecretify: function(secretString) {
  return String.fromCharCode(secretString);
 },
}
