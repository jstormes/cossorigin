

var source_url  = null;
var userId      = null;
var password    = null;
var button      = null;

function receive_crap()
{
    function receiveMessage(e){

        // Avoid unimportant crap
        if(e.origin!==source_url)
            return;

        //console.log("Message received");

        document.getElementById(userId).value   = e.data['userId'];
        document.getElementById(password).value = e.data['password'];

    }
    window.addEventListener('message',receiveMessage);
}

// Parse attribute parameters
var scripts = document.getElementsByTagName("script");
source_url  = scripts[scripts.length - 1].getAttribute("source_url");
userId      = scripts[scripts.length - 1].getAttribute("userId");
password    = scripts[scripts.length - 1].getAttribute("password");
button      = scripts[scripts.length - 1].getAttribute("button");


// Add load event
function addLoadEvent(func) {
    var oldonload = window.onload;
    if (typeof window.onload != 'function') {
        window.onload = func;
    } else {
        window.onload = function() {
            if (oldonload) {
                oldonload();
            }
            func();
        }
    }
}
addLoadEvent(receive_crap);
