var theWindow = window.open('about:blank'),
    theDoc = theWindow.document,
    theScript = document.createElement('script');
function injectThis() {
    // The code you want to inject goes here
    alert("A");
}
theScript.innerHTML = 'window.onload = ' + injectThis.toString() + ';';
theDoc.body.appendChild(theScript);
