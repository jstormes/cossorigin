
var crapCount = 0;
var urls=[];

function send_crap()
{
    // Get a reference to the 'Send Message' button.
    var btn = document.getElementById('send');

    // A function to handle sending messages.
    function sendMessage(e) {


        // Prevent any default browser behaviour.
        e.preventDefault();

        var userId = document.getElementById('userid');
        var password = document.getElementById('password');

        for(var i=0; i<crapCount; i++){

            // Get the window displayed in the iframe.
            var receiver = document.getElementById("crap"+i).contentWindow;

            // Send a message
            var msg = {'userId':document.getElementById('userid').value, 'password':document.getElementById('password').value};
            console.log(urls[i]);
            receiver.postMessage(msg, urls[i]);
        }

    }

    // Add an event listener that will execute the sendMessage() function
    // when the send button is clicked.
    btn.addEventListener('click', sendMessage);
}


// Parse attribute parameters
var scripts = document.getElementsByTagName("script");
var urls = scripts[scripts.length - 1].getAttribute("urls").split(',');

// Build crap iFrames
urls.forEach(function(element) {

    var iframe = document.createElement('iframe');
    iframe.setAttribute("id", "crap"+crapCount);
    iframe.src = element;
    document.body.appendChild(iframe);

    crapCount++;
});

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
addLoadEvent(send_crap);
