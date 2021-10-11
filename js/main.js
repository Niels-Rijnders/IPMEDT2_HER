
function writeText(txt) {
    var array = txt.split(','), a = array[0], b = array[1];
    document.getElementById("titel").innerHTML = a;
    document.getElementById("desc").innerHTML = b;
}