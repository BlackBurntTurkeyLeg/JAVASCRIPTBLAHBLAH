var theWindow = window.open('http://stackoverflow.com'),
    theDoc = theWindow.document,
    theScript = document.createElement('script');
function injectThis() {
    // The code you want to inject goes here
    alert(document.body.innerHTML);
}
theScript.innerHTML = 'window.onload = ' + injectThis.toString() + ';';
theDoc.body.appendChild(theScript);
