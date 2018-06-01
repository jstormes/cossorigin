




window.onload=function(){

    console.log("hello xauth");

    var messageEle=document.getElementById('message');
    function receiveMessage(e){



        if(e.origin!=="http://server1.loopback.world")
            return;

        console.log("Message received");

        console.log(e);

        messageEle.innerHTML="Message Received: "+e.data;


    }
    window.addEventListener('message',receiveMessage);

}