$(document).ready(function() {

console.log('Let\'s get things done !');
var socket = io.connect('http://localhost:8080');
      socket.on('data', function(message) {
        console.log(message);
    })
});