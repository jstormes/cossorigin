

//document.domain = "loopback.world";




window.onload = function() {

    console.log("hello server 1");


    // Get the window displayed in the iframe.
    var receiver = document.getElementById('xauth').contentWindow;

    // Get a reference to the 'Send Message' button.
    var btn = document.getElementById('send');

    // A function to handle sending messages.
    function sendMessage(e) {
        // Prevent any default browser behaviour.
        e.preventDefault();

        // Send a message with the text 'Hello Treehouse!' to the new window.
        receiver.postMessage({'userId':'test2', 'password':'test2'}, 'https://xauth.loopback.world');
    }

    // Add an event listener that will execute the sendMessage() function
    // when the send button is clicked.
    btn.addEventListener('click', sendMessage);
}
