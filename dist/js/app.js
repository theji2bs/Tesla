$(document).ready(function() {

console.log('Let\'s get things done !');

var socket = io.connect('http://localhost:8080');

socket.on('data', function(content) {
    console.log(content.number);
    //data.datasets[0].data.push(content.number);
    //delete data.datasets[0].data[0];
    //var shift = data.datasets[0].data.shift();
    //console.log(data.datasets.data);
    //console.log(data.datasets[0].data);
    
   
})

});