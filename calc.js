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
    var mph60 = kph60/1.60934;
    replaceNodeText("mph60", mph60.toFixed(2));

    var kph80 = meters*4.75;
    replaceNodeText("kph80", kph80.toFixed(2));
    var mph80 = kph80/1.60934;
    replaceNodeText("mph80", mph80.toFixed(2));

    var kph100 = meters*5.87;
    replaceNodeText("kph100", kph100.toFixed(2));
    var mph100 = kph100/1.60934;
    replaceNodeText("mph100", mph100.toFixed(2));

    var kph120 = meters*7.20;
    replaceNodeText("kph120", kph120.toFixed(2));
    var mph120 = kph120/1.60934;
    replaceNodeText("mph120", mph120.toFixed(2));

}

/*
100 revolution == 1km
*/