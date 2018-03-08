function myFunction() {
    var txt;
    if (confirm("Press OK to confirm you want to subscribe to our newsletter!")) {
        txt = "Thanks for subscribing to our newsletter";
    } else {
        txt = "You pressed Cancel!";
    }
    document.getElementById("demo").innerHTML = txt;
}

function tips_function() {
    var txt;
    if (confirm("Press OK to submit your tip")) {
        txt = "Thanks for your tip - We will review it soon!";
    } else {
        txt = "You pressed Cancel!";
    }
    document.getElementById("tipss").innerHTML = txt;
}
