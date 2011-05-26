function replaceNodeText(id, newText) {
    var node = document.getElementById(id);
    while (node.firstChild)
      node.removeChild(node.firstChild);
    node.appendChild(document.createTextNode(newText));
}
    
function getGears() {
    var front = document.getElementById("front").value;
    var back = document.getElementById("back").value;
    var combined = front/back
    replaceNodeText("level", combined)

// wheel circumference is based on 700c w/ 25mm tyres. a diameter of 622mm + 25cm (2111.15mm/2.11m)    
    const wheel_circ = 2.11115
    var meters = wheel_circ*combined
    replaceNodeText("meters", meters)
}


    