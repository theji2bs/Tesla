$(document).ready(function() {

console.log('Let\'s get things done !');
<<<<<<< HEAD

=======
var socket = io.connect('http://localhost:8080');
      socket.on('data', function(message) {
        console.log(message);
    })
>>>>>>> e9f713a89803e877e5d19ee566f55ba112739d95
});