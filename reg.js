function test() {
    var num = document.forms["name"].elements["name"].value;
    var usernumber = parseFloat(num);
    var reg = /[0-9]\.[0-9]{4,}/;
    if (reg.test(usernumber)) {
        var numround = parseFloat(Math.round(usernumber));
        var numroot = parseFloat(Math.sqrt(usernumber));
        var roundroot = parseFloat(Math.floor(numroot));
        var nearten = parseFloat(usernumber.toFixed(1));
        var nearhund = parseFloat(usernumber.toFixed(2));
        var nearthou = parseFloat(usernumber.toFixed(3));
        document.getElementById("resultA").value = numround;
        document.getElementById("resultB").value = roundroot;
        document.getElementById("resultC").value = nearten;
        document.getElementById("resultD").value = nearhund;
        document.getElementById("resultE").value = nearthou;
    } else {
        document.getElementById("error").innerHTML = "Your number should have at least 4 decimal places!";
    }

} 

