You can do something like this:

var theWindow = window.open('https://www.google.com'),
    theDoc = theWindow.document,
    theScript = document.createElement('script');
function injectThis() {
    // The code you want to inject goes here
    alert(document.body.innerHTML);
}
theScript.innerHTML = 'window.onload = ' + injectThis.toString() + ';';
theDoc.body.appendChild(theScript);
This also seems to work:

var theWindow = window.open('http://stackoverflow.com'),
    theScript = document.createElement('script');
function injectThis() {
    // The code you want to inject goes here
    alert(document.body.innerHTML);
}
// Self executing function
theScript.innerHTML = '(' + injectThis.toString() + '());';
theWindow.onload = function () {
    // Append the script to the new window's body.
    // Only seems to work with `this`
    this.document.body.appendChild(theScript);
};
