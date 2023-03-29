var win = window.open("about:blank")
const doc = win.document
doc.write(toString(window.document.documentElement))
alert(toString(window.documentElement))
window.close();
