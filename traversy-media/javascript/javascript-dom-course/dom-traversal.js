// Traversing the DOM.

var itemList = document.querySelector('#items');

// parentNode
//console.log(itemList.parentNode);
//itemList.parentNode.style.backgroundColor = '#f4f4f4';
//console.log(itemList.parentNode.parentNode);

// parentElement
//console.log(itemList.parentElement);
//itemList.parentElement.style.backgroundColor = '#f4f4f4';
//console.log(itemList.parentElement.parentElement);

// childNodes
//console.log(itemList.childNodes);

// children
//console.log(itemList.children);
//console.log(itemList.children[1]);
//itemList.children[1].style.backgroundColor = 'yellow';

// firstChild
//console.log(itemList.firstChild);

// firstElementChild
//console.log(itemList.lastElementChild);

// lastChild
//console.log(itemList.firstChild);

// lastElementChild
//console.log(itemList.lastElementChild);

// nextSibling
//console.log(itemList.nextSibling);

// nextElementSibling
//console.log(itemList.nextElementSibling);

// previousSibling
//console.log(itemList.previousSibling);

// previousElementSibling
//console.log(itemList.previousElementSibling);

// createElement
var newDiv = document.createElement('div');

// Create a div.
newDiv.className = 'hello';
newDiv.id = 'hello1';
newDiv.setAttribute('title', 'Hello Div');

// Create the text node.
var newDivText = document.createTextNode('Hello World');
newDiv.appendChild(newDivText);

// Insert it into the DOM.
var container = document.querySelector('header .container');
var h1 = document.querySelector('header h1');

console.log(newDiv);

container.insertBefore(newDiv, h1);
