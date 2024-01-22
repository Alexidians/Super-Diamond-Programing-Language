SuperDiamondPrograming = {
 parameterifyVariable: function(varName) { return eval("SuperDiamondPrograming.Functions." + varName) },
 session: {
  data: {
   variables: {},
   constants: {},
   functions: {}
  }
 },
 System: {
  textEncoder: new TextEncoder(),
  textDecoder: new TextDecoder(),
  objects: {
 SuperDiamondInterval: function(func, time, param1, param2, param3, param4, param5, param6, param7, param8, param9, param10) {
  var params = args[0]
  for (let i = 1; i < args.length; i++) {
   if(typeof params[i] == 'string') {
    params = params + ", '" + args[i] + "'"
   }
   else {
    params = params + ", " + args[i]
   }
  }
  var interval = setInterval(SuperDiamondPrograming.Scripts.execute.Func, time, func + "(" + params + ")")
  var ModifiedInterval = {
   toString: function() {
    return "[object SuperDiamondInterval]";
   }
  }
  ModifiedInterval.data = interval + "/Super-Diamond-Interval"
  ModifiedInterval.id = interval
  return ModifiedInterval;
 },
 SuperDiamondTimeout: function(func, time, args) {
  var params = args[0]
  for (let i = 1; i < args.length; i++) {
   if(typeof params[i] == 'string') {
    params = params + ", '" + args[i] + "'"
   }
   else {
    params = params + ", " + args[i]
   }
  }
  var timeout = setTimeout(SuperDiamondPrograming.Scripts.execute.Func, time, func + "(" + params + ")")
  var ModifiedTimeout = {
   toString: function() {
    return "[object SuperDiamondTimeout]";
   }
  }
  ModifiedTimeout.data = timeout + "/Super-Diamond-Timeout"
  ModifiedTimeout.id = timeout
  return ModifiedTimeout;
 },
 DatabaseConnection: {
  MySQL: function(servername, dbusername, dbpassword, dbname) {
   return { toString: function() { return "[object Super Diamond MySQL Database Connection]" }, servername: servername, username: dbusername, password: dbpassword, name: dbname, data: ["Super-Diamond-MySQL-DB-Connection", servername, dbusername, dbpassword, dbname] };
  }
 },
 Element: function(elem) {
  return { toString: function() { return "[object Super Diamond Element]" }, elem: elem, data: ["Super Diamond Element", elem], setAttribute: function (name, value) { elem.setAttribute(name, value) }, getAttribute: function (name) { return elem.getAttribute(name); }, removeAttribute: function (name) { elem.removeAttribute(name) }, delete: function () { elem.remove() }}
 },
 Encoding: function(encodingString) {
  if(encodingString.split("").length == 12) {
   return { toString: function() { return "[object Super Diamond Encoding]" }, data: encodingString.split("")}
  }
  else {
   var Err = new Error("Super Diamond Programing Construct Error");
   Err.message = "Failed To Construct Encoding. The Character Length is not correct. should be 12 characters"
   throw Err;
  }
 },
 Hashing: function(hashingString) {
  if(hashingString.split("").length == 12) {
   return { toString: function() { return "[object Super Diamond Hashing]" }, data: hashingString.split("")}
  }
  else {
   var Err = new Error("Super Diamond Programing Construct Error");
   Err.message = "Failed To Construct Hashing. The Character Length is not correct. should be 12 characters"
   throw Err;
  }
 }
}
 },
 Scripts: {
  element: {
   onclick: {
    Func: function(element) {
     return eval("SuperDiamondPrograming.Functions." + element.rlef);
    }
   }
  },
  execute: {
   Func: function(SuperDiamondFunction) {
    return eval("SuperDiamondPrograming.Functions." + SuperDiamondFunction);
   }
  }
 },
 Functions: {
  SuperDiamondPrograming: {
   parameterifyVariable: function(varName) { return eval("SuperDiamondPrograming.Functions." + varName) }
  },
isKeyPressed: function(keyName) {
 try {
  return SuperDiamondPrograming.Scripts.execute.Func("keyPressed." + keyName)
 }
 catch(err) {
  return false;
 }
},
TextEncoder: {
 enocde: function() {
  var text = arguments[0]
  for (let i = 1; i < arguments.length; i++) {
   text = text + arguments[i]
  }
  return SuperDiamondPrograming.System.textEncoder.encode(text);
 },
 stringify: function(encodedText) {
  return encodedText.toString();
 },
 toBuffer: function(encodedText) {
  return encodedText.buffer;
 }
},
TextDecoder: {
 decode: function(text) {
  return SuperDiamondPrograming.System.textDecoder.decode(text);
 },
 unStringify: function(encodedString) {
  return SuperDiamondPrograming.System.textEncoder.encode(eval("String.fromCharCode(" + encodedString + ")"));
 },
 fromBuffer: function(buffer) {
  return new Uint8Array(buffer);
 }
},
Encoder: {
 encode: function(text, encoding) {
  var encodedText = SuperDiamondPrograming.System.textEncoder.encode(text).toString();
  encodedText = encodedText.replaceAll("0", encoding.data[0])
  encodedText = encodedText.replaceAll("1", encoding.data[1])
  encodedText = encodedText.replaceAll("2", encoding.data[2])
  encodedText = encodedText.replaceAll("3", encoding.data[3])
  encodedText = encodedText.replaceAll("4", encoding.data[4])
  encodedText = encodedText.replaceAll("5", encoding.data[5])
  encodedText = encodedText.replaceAll("6", encoding.data[6])
  encodedText = encodedText.replaceAll("7", encoding.data[7])
  encodedText = encodedText.replaceAll("8", encoding.data[8])
  encodedText = encodedText.replaceAll("9", encoding.data[9])
  encodedText = encodedText.replaceAll(",", encoding.data[10])
  encodedText = encodedText.replaceAll(" ", encoding.data[11])
  return encodedText;
 },
 decode: function(text, encoding) {
  var encodedText = text
  encodedText = encodedText.replaceAll(encoding.data[0], "0")
  encodedText = encodedText.replaceAll(encoding.data[1], "1")
  encodedText = encodedText.replaceAll(encoding.data[2], "2")
  encodedText = encodedText.replaceAll(encoding.data[3], "3")
  encodedText = encodedText.replaceAll(encoding.data[4], "4")
  encodedText = encodedText.replaceAll(encoding.data[5], "5")
  encodedText = encodedText.replaceAll(encoding.data[6], "6")
  encodedText = encodedText.replaceAll(encoding.data[7], "7")
  encodedText = encodedText.replaceAll(encoding.data[8], "8")
  encodedText = encodedText.replaceAll(encoding.data[9], "9")
  encodedText = encodedText.replaceAll(encoding.data[10], ",")
  encodedText = encodedText.replaceAll(encoding.data[11], " ")
  encodedText = eval("String.fromCharCode(" + encodedText + ")");
  return encodedText;
 },
 Encoding: function(EncodingString) {
  return SuperDiamondPrograming.System.objects.Encoding(EncodingString)
 },
 getEncoding: async function(Encoding) {
   var SuperDiamondProgramingFileGetResponse = await fetch(SuperDiamondPrograming.System.url + "/encodings/" + Encoding + ".SuperDiamondProgramingEncoding");
   if (SuperDiamondProgramingFileGetResponse.ok) {
    try {
      var EncodingObj = SuperDiamondPrograming.System.objects.Encoding(SuperDiamondProgramingFileGetResponse.text());
      return EncodingObj;
    } catch(err) {
     console.error('Failed To Load SuperDiamondPrograming Encoding ' + Encoding + ' Due To Error: ' + err)
     return null;
    }
   } else {
    console.error('Could Not Fetch SuperDiamondPrograming Encoding ' + Encoding + ' due to HTTP-Error: '+ SuperDiamondProgramingFileGetResponse.status)
   }
  }
 },
 hasher: {
 hash: function(text, hashing) {
  var encodedText = SuperDiamondPrograming.System.textEncoder.encode(text).toString();
  encodedText = encodedText.replaceAll("0", hashing.data[0])
  encodedText = encodedText.replaceAll("1", hashing.data[1])
  encodedText = encodedText.replaceAll("2", hashing.data[2])
  encodedText = encodedText.replaceAll("3", hashing.data[3])
  encodedText = encodedText.replaceAll("4", hashing.data[4])
  encodedText = encodedText.replaceAll("5", hashing.data[5])
  encodedText = encodedText.replaceAll("6", hashing.data[6])
  encodedText = encodedText.replaceAll("7", hashing.data[7])
  encodedText = encodedText.replaceAll("8", hashing.data[8])
  encodedText = encodedText.replaceAll("9", hashing.data[9])
  encodedText = encodedText.replaceAll(",", hashing.data[10])
  encodedText = encodedText.replaceAll(" ", hashing.data[11])
  return encodedText;
 },
 Hashing: function(HashingString) {
  return SuperDiamondPrograming.System.objects.Hashing(HashingString)
 },
 getHashing: async function(Hashing) {
   var SuperDiamondProgramingFileGetResponse = await fetch(SuperDiamondPrograming.System.url + "/hashings/" + Hashing + ".SuperDiamondProgramingHashing");
   if (SuperDiamondProgramingFileGetResponse.ok) {
    try {
      var EncodingObj = SuperDiamondPrograming.System.objects.Hashing(SuperDiamondProgramingFileGetResponse.text());
      return EncodingObj;
    } catch(err) {
     console.error('Failed To Load SuperDiamondPrograming Hashing ' + Hashing + ' Due To Error: ' + err)
     return null;
    }
   } else {
    console.error('Could Not Fetch SuperDiamondPrograming Hashing ' + Hashing + ' due to HTTP-Error: '+ SuperDiamondProgramingFileGetResponse.status)
   }
  }
 },
arrays: {
 parse: function(array) {
  if(array.startsWith("[") && array.endsWith("]")) {
   return eval(array);
  }
 },
 stringify: function(array) {
  return "[" + array.toString + "]";
 }
},
Storage: {
 installed: false
},
Databases: {
 MySQL: {
  connect: function(servername, dbusername, dbpassword, dbname) {
   return SuperDiamondPrograming.System.objects.DatabaseConnection.MySQL(servername, dbusername, dbpassword, dbname);
  },
  request: function(DatabaseConnection, query) {
   if(DatabaseConnection.data[0] == "Super-Diamond-MySQL-DB-Connection") {
    open("https://alexidiansgithub.getenjoyment.net/Super-Diamond-Programing-Language/php/databaseRequest/mysql.php?servername=" + encodeURI(DatabaseConnection.data[1]) + "&dbusername=" + encodeURI(DatabaseConnection.data[2]) + "&dbpassword=" + encodeURI(DatabaseConnection.data[3]) + "&dbname=" + encodeURI(DatabaseConnection.data[4]) + "&query=" + encodeURI(query));
   }
  }
 }
},
Session: {
 save: function(name) {
  if(typeof localforage !== typeof undefined) {
   localforage.setItem("SuperDiamondProgramingStorage_Sessions_" + name, SuperDiamondPrograming.session)
  } else {
   var Err = new Error("SuperDiamondPrograming Storage Error")
   Err.message = 'Could Not Save Session As The Lib localforage.min.js (localforage) was not loaded. HTML Tag: <script src="https://alexidians.github.io/Super-Diamond-Programing-Language/libs/localforage.min.js"></script>'
  }
 },
 load: function(name) {
  if(typeof localforage !== typeof undefined) {
   location.replace("?SuperDiamondPrograming_LoadSession=" + encodeURIComponent(name))
  } else {
   var Err = new Error("SuperDiamondPrograming Storage Error")
   Err.message = 'Could Not Load Session As The Lib localforage.min.js (localforage) was not loaded. HTML Tag: <script src="https://alexidians.github.io/Super-Diamond-Programing-Language/libs/localforage.min.js"></script>'
  }
 }
},
Javascript: function() {
 var code = arguments[0]
 for (let i = 1; i < arguments.length; i++) {
  code = code + "; " + arguments[i]
 }
 return eval(code);
},
ServiceWorker: {
 execute: function () {
  var code = arguments[0]
  for (let i = 1; i < arguments.length; i++) {
   code = code + "; " + arguments[i]
  }
  navigator.serviceWorker.controller.postMessage({ requestType: "SuperDiamondPrograming Service-Worker Execution", code: code})
 }
},
btoa: function(data) {
 var data = arguments[0]
 for (let i = 1; i < arguments.length; i++) {
  data = data + "; " + arguments[i]
 }
 return btoa(data);
},
atob: function(data) {
 var data = arguments[0]
 for (let i = 1; i < arguments.length; i++) {
  data = data + "; " + arguments[i]
 }
 return atob(data);
},
statements: {
 if: function(state, ifFunc, elseFunc) {
  if(state) {
   return { state: state, returnValue: SuperDiamondPrograming.Scripts.execute.Func(ifFunc) };
  }
  else {
   if(typeof elseFunc !== 'undefined') {
    return { state: state, returnValue: SuperDiamondPrograming.Scripts.execute.Func(elseFunc) };
   }
   else {
    return { state: state };
   }
  }
 },
 for: function(startNumber, endNumber, func) {
  for (let i = startNumber; i < endNumber; i++) {
   SuperDiamondPrograming.Scripts.execute.Func("i = " + i)
   SuperDiamondPrograming.Scripts.execute.Func(func)
  }
  SuperDiamondPrograming.Scripts.execute.Func("i = undefined")
 }
},
customFuncs: { 
set: function(name, funcArray) {
 SuperDiamondPrograming.session.data.functions[name] + funcArray
},
content: function(name) {
 return SuperDiamondPrograming.session.data.functions[name];
},
delete: function() {
 return delete SuperDiamondPrograming.session.data.functions[name];
},
execute: function() {
 for (let i = 0; i < arguments.length; i++) {
  var funcArray = SuperDiamondPrograming.session.data.functions[arguments[i]]
  for (let i = 0; i < funcArray.length; i++) {
   SuperDiamondPrograming.Scripts.execute.Func(funcArray[i])
  }
 }
}
},
runString: function() {
 var code = "SuperDiamondPrograming.Scripts.execute.Func('" + arguments[0] + "')"
 for (let i = 0; i < arguments.length; i++) {
  code = code + "; SuperDiamondPrograming.Scripts.execute.Func('" + arguments[0] + "')"
 }
 return eval(code);
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
interval: function interval(func, time, args) {
 return SuperDiamondPrograming.System.objects.SuperDiamondInterval(func, time, args);
},
timeout: function (func, time, args) {
 return SuperDiamondPrograming.System.objects.SuperDiamondTimeout(func, time, args);
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
create: function (tag) {
 return SuperDiamondPrograming.System.objects.element(document.createElement(tag));
},

setAttribute: function (elem, name, value) {
 if(elem.data[0] == "Super Diamond Element") {
  elem.data[1].setAttribute(name, value)
 }
},

getAttribute: function (elem, name) {
 if(elem.data[0] == "Super Diamond Element") {
  return elem.data[1].getAttribute(name);
 }
},

removeAttribute: function (elem, name) {
 if(elem.data[0] == "Super Diamond Element") {
  elem.data[1].removeAttribute(name)
 }
},

byID: function (ID) {
 return SuperDiamondPrograming.System.objects.element(document.getElementById(ID));
},

byTagName: function (tagName) {
 var array = document.getElementsByTagName(tagName)
 for (let i = 0; i < array.length; i++) {
  array[i] = SuperDiamondPrograming.System.objects.element(array[i]);
 }
 return array;
},

byClassName: function (className) {
 var array = document.getElementsByClassName(className)
 for (let i = 0; i < array.length; i++) {
  array[i] = SuperDiamondPrograming.System.objects.element(array[i]);
 }
 return array;
},

delete: function (elem, name) {
 if(elem.data[0] == "Super Diamond Element") {
  elem.data[1].remove()
 }
},

bottomStick: function (element) {
 element.data[1].style.position = "fixed"
 element.data[1].style.bottom = 0
},

topStick: function (element) {
 element.data[1].style.position = "fixed"
 element.data[1].style.top = 0
}
},
console: {
error: function (message) {
 console.error(message)
},

table: function (data) {
 console.table(data)
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
JSON: {
 stringify: function(json) {
  return JSON.stringify(json);
 },
 parse: function(json) {
  return JSON.parse(json);
 }
},
import: async function (module) {
   let SuperDiamondProgramingFileGetResponse = await fetch(SuperDiamondPrograming.System.url + "/modules/" + module + ".SuperDiamondPrograming");
   if (SuperDiamondProgramingFileGetResponse.ok) {
    try {
     var Scripts = JSON.parse(SuperDiamondProgramingFileGetResponse.text())
     for (let i = 0; i < Scripts.length; i++) {
      SuperDiamondPrograming.Scripts.execute.Func(Scripts[i])
     }
     return true;
    } catch(err) {
     console.error('Failed To Load SuperDiamondPrograming Module ' + module + ' Due To Error: ' + err)
     return null;
    }
   } else {
    console.error('Could Not Fetch SuperDiamondPrograming Module ' + module + ' due to HTTP-Error: '+ SuperDiamondProgramingFileGetResponse.status)
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
await: async function(func) {
 return await SuperDiamondPrograming.Scripts.execute.Func(func)
},
variables: {
 set: function (name, value) {
  SuperDiamondPrograming.session.data.variables[name] = value
 },
 get: function (name) {
  return SuperDiamondPrograming.session.data.variables[name];
 },
 delete: function (name) {
  return delete SuperDiamondPrograming.session.data.variables[name];
 }
},
constants: {
 create: function (name, value) {
  if(SuperDiamondPrograming.session.data.constants[name] == undefined) {
   SuperDiamondPrograming.session.data.constants[name] = value
  }
  else {
   throw new Error("Constant " + name + " already Exsists")
  }
 },
 get: function (name) {
  return SuperDiamondPrograming.session.data.constants[name];
 }
},
battery: {},
fetch: function(resource, options) {
 return fetch(resource, options);
},
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

window.addEventListener("SuperDiamondPrograming Storage API Startup", function() { SuperDiamondPrograming.Functions.Storage = JSON.parse(document.getElementById("SuperDiamondProgramingStorageAPI")) })
async function SuperDiamondProgramingStartup() {
 SuperDiamondPrograming.System.path = document.getElementsByTagName("SuperDiamondProgramingPath")[0].innerHTML
 SuperDiamondPrograming.System.url = location.protocol + "//" + location.hostname + "/" + document.getElementsByTagName("SuperDiamondProgramingPath")[0].innerHTML
 navigator.serviceWorker.register(SuperDiamondPrograming.System.url + "/offline-access.js")
 SuperDiamondPrograming.System.offlineAccessElem = document.createElement("iframe")
 SuperDiamondPrograming.System.offlineAccessElem.style.display = "none"
 SuperDiamondPrograming.System.offlineAccessElem.src = "https://alexidians.github.io/Super-Diamond-Programing-Language/offline-access.html"
 document.body.appendChild(SuperDiamondPrograming.System.offlineAccessElem)
 let configGetResponse = await fetch(SuperDiamondPrograming.System.url + "/config.json");
 if (configGetResponse.ok) {
   SuperDiamondPrograming.System.config = await configGetResponse.json()
 } else {
   console.error("SuperDiamondPrograming Startup Error: Failed to Load Super Diamond Programing Config Due To. HTTP-Error: " + configGetResponse.status);
   SuperDiamondPrograming = function() {
    return "SuperDiamondPrograming Was Disabled Due To Startup Error: " + "Failed to Load Super Diamond Programing Config Due To. HTTP-Error: " + configGetResponse.status
   }
   return;
 }
 let userGetResponse = await fetch(SuperDiamondPrograming.System.url + "/user.json");
 if (userGetResponse.ok) {
   SuperDiamondPrograming.System.user = await userGetResponse.json()
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
 SuperDiamondPrograming.Functions.Databases.queryElement = document.createElement("iframe")
 SuperDiamondPrograming.Functions.Databases.queryElement.style.display = "none";
 document.body.appendChild(SuperDiamondPrograming.Functions.Databases.queryElement)
    window.addEventListener("message", function (e) {
        if (e.origin !== "http://alexidiansgithub.getenjoyment.net/") {
            return
        }
        SuperDiamondPrograming.Functions.Databases.lastResponse = JSON.parse(e.data)
    })
setInterval(eval, 0, "SuperDiamondPrograming.Functions.elements.body = document.body")
setInterval(eval, 0, "SuperDiamondPrograming.Functions.console.memory = console.memory")
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
window.addEventListener("keyup", function(e) { try {SuperDiamondPrograming.Scripts.execute.Func("pressedKeys." + e.code.split("Key")[e.code.split("Key").length] + " = false");} catch(err){}});
window.addEventListener("keydown", function(e) { try {SuperDiamondPrograming.Scripts.execute.Func("pressedKeys." + e.code.split("Key")[e.code.split("Key").length] + " = true");} catch(err){}});
var ServiceWorkerExecutorActive = false
navigator.serviceWorker.getRegistrations().then(registrations => {
for (let i = 0; i < registrations.length; i++) {
 try {
  if(registrations[i].active.scriptURL == SuperDiamondPrograming.System.url + "/service-worker_executor.js") {
   ServiceWorkerExecutorActive = true
  }
 }
 catch(err) {
  console.info("Failed To Check For Service Worker Executor: " + err)
 }
}
});
if(!ServiceWorkerExecutorActive) {
 navigator.serviceWorker.register(SuperDiamondPrograming.System.url + "/service-worker_executor.js")
}
navigator.serviceWorker.addEventListener('message', event => {
 if (event.data.sender === "SuperDiamondPrograming Service-Worker Execution Return") {
  SuperDiamondPrograming.Functions.ServiceWorker.lastReturn = { successful: event.data.successful, result: event.data.result }
 }
});
var params = new URL(document.location).searchParams;
var SessionNameToLoad = params.get("SuperDiamondPrograming_LoadSession");
if(SessionNameToLoad !== null) {
 if(typeof localforage !== typeof undefined) {
  localforage.getItem("SuperDiamondProgramingStorage_Sessions_" + SessionNameToLoad)
 } else {
  var Err = new Error("SuperDiamondPrograming Storage Error")
  Err.message = 'Could Not Load Session As The Lib localforage.min.js (localforage) was not loaded. HTML Tag: <script src="https://alexidians.github.io/Super-Diamond-Programing-Language/libs/localforage.min.js"></script>'
 }
}
console.info("SuperDiamondPrograming Has Started Up")
if(SuperDiamondPrograming.System.config.enabled == true) {
 var SuperDiamondProgramingTags = document.getElementsByTagName("SuperDiamondPrograming")
 var SuperDiamondProgramingFileTags = document.getElementsByTagName("SuperDiamondProgramingFile")
 var SuperDiamondProgramingTagsExsist = typeof document.getElementsByTagName("SuperDiamondPrograming")[0] !== 'undefined'
 var SuperDiamondProgramingFileTagsExsist = typeof document.getElementsByTagName("SuperDiamondProgramingFile")[0] !== 'undefined'
 for (let i = 0; i < SuperDiamondProgramingTags.length; i++) {
  SuperDiamondProgramingTags[i].style.display = "none"
  try {
   var Scripts = JSON.parse(SuperDiamondProgramingTags.innerHTML)
   for (let i = 0; i < Scripts.length; i++) {
    SuperDiamondPrograming.Scripts.execute.Func(Scripts[i])
   }
  } catch(err) {
   console.error('Failed To Load Script Due To Error: ' + err)
  }
 }
 for (let i = 0; i < SuperDiamondProgramingFileTags.length; i++) {
  SuperDiamondProgramingFileTags[i].style.display = "none"
  if(SuperDiamondProgramingFileTags[i].src.endsWith(".SuperDiamondPrograming")) {
   let SuperDiamondProgramingFileGetResponse = await fetch(SuperDiamondProgramingFileTags[i].src);
   if (SuperDiamondProgramingFileGetResponse.ok) {
    try {
     var Scripts = JSON.parse(SuperDiamondProgramingFileGetResponse.text())
     for (let i = 0; i < Scripts.length; i++) {
      SuperDiamondPrograming.Scripts.execute.Func(Scripts[i])
     }
    } catch(err) {
     console.error('Failed To Load File <SuperDiamondProgramingFile src="' + SuperDiamondProgramingFileTags[i].src + '"</SuperDiamondProgramingFile> Due To Error: ' + err)
    }
   } else {
    console.error('Could Not Fetch SuperDiamondPrograming File Content At <SuperDiamondProgramingFile src="' + SuperDiamondProgramingFileTags[i].src + '"</SuperDiamondProgramingFile> due to HTTP-Error: '+ SuperDiamondProgramingFileGetResponse.status)
   }
  }
  else {
   console.error('File At <SuperDiamondProgramingFile src="' + SuperDiamondProgramingFileTags[i].src + '"</SuperDiamondProgramingFile> is Not Type .SuperDiamondPrograming')
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
