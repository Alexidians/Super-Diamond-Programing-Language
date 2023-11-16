SuperDiamondPrograming = {
 System: {
  Objects: {
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
 },
 Scripts: {
  element: {
   onclick: {
    Func: function(element) {
     eval("SuperDiamondPrograming.Functions." + element.rlef)
    }
   }
  },
  execute: {
   Func: function(SuperDiamondFunction) {
    eval("SuperDiamondPrograming.Functions." + SuperDiamondFunction)
   }
  }
 },
 Functions: {
isKeyPressed: function(keyName) {
 try {
  return SuperDiamondPrograming.Scripts.execute.Func("keyPressed." + keyName)
 }
 catch(err) {
  return false;
 }
},
Javascript: function(code) {
 eval(code)
},
runString: function(SuperDiamondFunction) {
 SuperDiamondPrograming.Scripts.execute.Func(SuperDiamondFunction)
},
keyPressed: {},
dates: {
 current: function () {
  var date = new Date();
  return date;
 },
 new: function (datestring) {
  var date = new Date(datestring);
  return date;
 }
},
intervals: {
interval: function interval(func, time, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10) {
 return SuperDiamondPrograming.System.objects.SuperDiamondInterval(func, time, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10);
},
timeout: function (func, time, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10) {
 return SuperDiamondPrograming.System.objects.SuperDiamondTimeout(func, time, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10);
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
},
elements: {
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
},
console: {
error: function (message) {
 console.error(message)
},

table: function (data) {
 console.error(data)
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
},
popups: {
  create: function (url, windowname) { 
    if (! window.focus)return true;
    var href;
    if (typeof(url) == 'string') href=url;
    else href=url.href; 
    return window.open(href, windowname, 'width=400,height=200,scrollbars=yes');
  },

 MsgBox: function (text, iconurl, title) {
  var msgbox = popups.create("https://alexidians.github.io/Super-Diamond-Programing-Language/files/popups/MsgBox.html", title)
  var msgJson = {
   text: text,
   iconurl: iconurl,
   title: title
  }
  msgbox.postMessage(JSON.stringify(msgJson), "*")
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
},
cookies: {
 toString: function() {
  return document.cookie
 },
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
},
sesStorage: {
 setItem: function (name, value) {
  sessionStorage.setItem(name, value)
 },
 getItem: function (name) {
  return sessionStorage.getItem(name);
 },
 removeItem: function (name) {
  sessionStorage.removeItem(name)
 }
},
storage: {
 setItem: function (name, value) {
  localStorage.setItem(name, value)
 },
 getItem: function (name) {
  return localStorage.getItem(name);
 },
 removeItem: function (name) {
  localStorage.removeItem(name)
 }
},
geoLocation: {
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
},
windowStorage: {
 setItem: function (name, value) {
  return SuperDiamondPrograming.Scripts.execute.Func("windowStorage." + name + " = " + value);
 },
 getItem: function (name) {
  return SuperDiamondPrograming.Scripts.execute.Func("windowStorage." + name);
 }
},
battery: {},
secrets: {
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
 }
 }
function SuperDiamondProgramingStartup() {
 SuperDiamondPrograming.System.path = document.getElementsByTagName("SuperDiamondProgramingPath")[0].src
 SuperDiamondPrograming.System.url = location.protocol + "//" + location.hostname + "/" + document.getElementsByTagName("SuperDiamondProgramingPath")[0].src
 let configGetResponse = await fetch(SuperDiamondPrograming.System.url + "/config.json");
 if (configGetResponse.ok) {
   SuperDiamondPrograming.System.config = await configGetResponse.json();
 } else {
   console.error("SuperDiamondPrograming Startup Error: Failed to Load Super Diamond Programing Config Due To. HTTP-Error: " + configGetResponse.status);
   SuperDiamondPrograming = function() {
    return "SuperDiamondPrograming Was Disabled Due To Startup Error: " + "Failed to Load Super Diamond Programing Config Due To. HTTP-Error: " + configGetResponse.status
   }
   return;
 }
 let userGetResponse = await fetch(SuperDiamondPrograming.System.url + "/user.json");
 if (userGetResponse.ok) {
   SuperDiamondPrograming.System.user = await userGetResponse.json();
 } else {
   console.error("SuperDiamondPrograming Startup Error: Failed to Load Super Diamond Programing User Due To. HTTP-Error: " + userGetResponse.status);
   SuperDiamondPrograming = function() {
    return "SuperDiamondPrograming Was Disabled Due To Startup Error: " + "Failed to Load Super Diamond Programing User Due To. HTTP-Error: " + userGetResponse.status
   }
   return;
 }
 if(SuperDiamondPrograming.System.config.enabled == false) {
  SuperDiamondPrograming = function() {
   return "SuperDiamondPrograming Is Disabled"
  }
  console.info("SuperDiamondPrograming Is Disabled")
  return;
 }

setInterval(eval, 0, "SuperDiamondPrograming.Functions.elements.body = document.body")
setInterval(eval, 0, "SuperDiamondPrograming.Functions.consol.memory = console.memory")
setInterval(eval, 0, "SuperDiamondPrograming.Functions.storage.itemAmount = localStorage.length")
setInterval(eval, 0, "SuperDiamondPrograming.Functions.sesStorage.itemAmount = sessionStorage.length")
setInterval(function () {
 navigator.getBattery().then((batteryMng) => {
  SuperDiamondPrograming.Functions.battery.amount = batteryMng.level;
  SuperDiamondPrograming.Functions.battery.charging = batteryMng.charging;
  SuperDiamondPrograming.Functions.battery.timeUntilFull = batteryMng.chargingTime
  SuperDiamondPrograming.Functions.battery.timeUntilEmpty = batteryMng.dischargingTime
});
}, 0);
window.addEventListener("keyup", function(e) { SuperDiamondPrograming.Scripts.execute.Func("pressedKeys." + e.code.split("Key")[e.code.split("Key").length] + " = false")});
window.addEventListener("keydown", function(e) { SuperDiamondPrograming.Scripts.execute.Func("pressedKeys." + e.code.split("Key")[e.code.split("Key").length] + " = true")});
console.info("SuperDiamondPrograming Has Started Up")
if(SuperDiamondPrograming.System.config.enabled == true) {
 var SuperDiamondProgramingTags = document.getElementsByTagName("SuperDiamondPrograming")
 var SuperDiamondProgramingFileTags = document.getElementsByTagName("SuperDiamondProgramingFile")
 var SuperDiamondProgramingTagsExsist = typeof document.getElementsByTagName("SuperDiamondPrograming")[0] !== 'undefined'
 var SuperDiamondProgramingFileTagsExsist = typeof document.getElementsByTagName("SuperDiamondProgramingFile")[0] !== 'undefined'
 for (let i = 0; i < SuperDiamondProgramingTags.length; i++) {
  var Scripts = SuperDiamondProgramingTags.innerHTML.split(SuperDiamondPrograming.System.config.functionSplitter);
  for (let i = 0; i < Scripts.length; i++) {
   SuperDiamondPrograming.Scripts.execute.Func(Scripts[i])
  }
 }
 for (let i = 0; i < SuperDiamondProgramingFileTags.length; i++) {
  if(SuperDiamondProgramingFileTags[i].src.endsWith(".SuperDiamondPrograming")) {
   let SuperDiamondProgramingFileGetResponse = await fetch(SuperDiamondProgramingFileTags[i].src);
   if (SuperDiamondProgramingFileGetResponse.ok) {
    var Scripts = SuperDiamondProgramingFileGetResponse.text().split(SuperDiamondPrograming.System.config.functionSplitter);
    for (let i = 0; i < Scripts.length; i++) {
     SuperDiamondPrograming.Scripts.execute.Func(Scripts[i])
    }
   } else {
    console.error('Could Not Fetch SuperDiamondPrograming File Content At <SuperDiamondProgramingFile src="' + SuperDiamondProgramingFileTags[i].src '"</SuperDiamondProgramingFile> due to HTTP-Error: '+ SuperDiamondProgramingFileGetResponse.status)
   }
  }
  else {
   console.error('File At <SuperDiamondProgramingFile src="' + SuperDiamondProgramingFileTags[i].src '"</SuperDiamondProgramingFile> is Not Type .SuperDiamondPrograming')
  }
 }
 if(SuperDiamondPrograming.System.config.hideTags) {
  while(SuperDiamondProgramingTagsExsist) {
   document.getElementsByTagName("SuperDiamondPrograming")[0].remove()
   SuperDiamondProgramingTagsExsist = typeof document.getElementsByTagName("SuperDiamondPrograming")[0] !== 'undefined'
  }
  while(SuperDiamondProgramingFileTagsExsist) {
   document.getElementsByTagName("SuperDiamondProgramingFile")[0].remove()
   SuperDiamondProgramingFileTagsExsist = typeof document.getElementsByTagName("SuperDiamondProgramingFile")[0] !== 'undefined'
  }
 }
}
SuperDiamondProgramingStartup = undefined
}
SuperDiamondProgramingStartup()
