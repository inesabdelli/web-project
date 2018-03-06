function myFunction() {
    var txt;
    if (confirm("Press OK to confirm you want to subscribe to our newsletter!")) {
        txt = "Thanks for subscribing to our newsletter";
    } else {
        txt = "You pressed Cancel!";
    }
    document.getElementById("demo").innerHTML = txt;
}
