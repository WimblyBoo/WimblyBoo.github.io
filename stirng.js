function test() {
    var instances = 0;
    var string = document.forms["form1"].elements["string"].value;
    var character = document.forms["form1"].elements["character"].value;
    for (var i = 0; i < string.length; i++) {

        if (string.charAt(i) === character) {
            instances = instances + 1;
        }

    }

    if (instances === 0) {
        document.getElementById("display").innerHTML = "";
        var newWindow = window.open("./errorwindow.html?char=" + character, "newWindow", "width=300,height=100,left=50,top=350");
        newWindow.focus();
        newWindow.document.close();
    } else {
        document.getElementById("display").innerHTML = "Your character appears " + instances + " times in your string!";
    }
} 
