var SuperDiamondPrograming = [
var elements = [ function createElement(tag) {
 return document.createElement(tag);
}

function editElement(elem, type, value) {
 eval("elem." + type + " = " + value)
}

function getElementData(elem, type) {
 return eval("elem." + type);
}
]
]
