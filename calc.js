function replaceNodeText(id, newText) {
    //finds a node by id and replaces it with newText
    var node = document.getElementById(id);
    if (node.firstChild){
      node.removeChild(node.firstChild);
    node.appendChild(document.createTextNode(newText));
    }
}

function getWheelCirc() {
    //set wheel circumferenced based on the dropdown menu
    var pi = Math.PI;
    var select = document.calcform.diameter;
    for (var i = 0; i<select.options.length; i++) {
        if (select.options[i].selected == true) {
            var circ = select.value;
        }
    }
    var wheelMeter = (circ*pi)*.001;
    return wheelMeter;
}

function getGearsAndSet() {
    //gets front and back gears, sets them to a var, then calculates and sets speeds based on fixed rpm values
    var front = document.getElementById("front").value;
    var back = document.getElementById("back").value;
    var combined = front/back;

    //sets gear level
    var level = "";
    if (combined > 4) {
        level = "Ballsy";
        document.getElementById("data").style.backgroundColor="red";
        document.getElementById("data").style.color="white";        
    }
    else if (combined > 3) {
        level = "Pretty Tough";
        document.getElementById("data").style.backgroundColor="blue";
        document.getElementById("data").style.color="white";        
    }
    else if (combined > 2) {
        level = "Daily Driver";
        document.getElementById("data").style.backgroundColor="lightblue";
        document.getElementById("data").style.color="black";        
    }
    else if (combined > 0) {
        level = "Sissy";
        document.getElementById("data").style.backgroundColor="pink";
        document.getElementById("data").style.color="black";        
    }
    replaceNodeText("level", level);

    //sets circumferenced 
    var wheel_circ = getWheelCirc();
    replaceNodeText("circ", wheel_circ.toFixed(4))

    var meters = wheel_circ*combined;
    replaceNodeText("meters", meters.toFixed(0));

    var kph60 = meters*3.6;
    replaceNodeText("kph60", kph60.toFixed(1));
    var mph60 = kph60/1.60934;
    replaceNodeText("mph60", mph60.toFixed(1));

    var kph80 = meters*4.75;
    replaceNodeText("kph80", kph80.toFixed(1));
    var mph80 = kph80/1.60934;
    replaceNodeText("mph80", mph80.toFixed(1));

    var kph100 = meters*5.87;
    replaceNodeText("kph100", kph100.toFixed(1));
    var mph100 = kph100/1.60934;
    replaceNodeText("mph100", mph100.toFixed(1));

    var kph120 = meters*7.20;
    replaceNodeText("kph120", kph120.toFixed(1));
    var mph120 = kph120/1.60934;
    replaceNodeText("mph120", mph120.toFixed(1));

}
