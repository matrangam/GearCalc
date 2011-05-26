function replaceNodeText(id, newText) {
    var node = document.getElementById(id);
    while (node.firstChild)
      node.removeChild(node.firstChild);
    node.appendChild(document.createTextNode(newText));
}
    
function getGears() {
    var front = document.getElementById("front").value;
    var back = document.getElementById("back").value;
    var combined = front/back;
    replaceNodeText("level", combined.toFixed(2));

// wheel circumference is based on 700c w/ 25mm tyres. a diameter of 622mm + 25cm (2111.15mm/2.11m)    
    const wheel_circ = 2.11115;
    var meters = wheel_circ*combined;
    replaceNodeText("meters", meters.toFixed(2));
    
    var kph60 = meters*3.6;
    replaceNodeText("kph60", kph60.toFixed(2));
    var mph60 = kph60/1.6;
    replaceNodeText("mph60", mph60.toFixed(2));
}

/* 
1 revolution == 10 meters
100 revolutions == 1 Km

rev per min 3.6 

*/