

document.domain = "loopback.world";

console.log("hello server 2");

if (typeof(Storage) !== "undefined") {
    // Code for localStorage/sessionStorage.
    localStorage.setItem("server2", "Server 2");
} else {
    // Sorry! No Web Storage support..
}