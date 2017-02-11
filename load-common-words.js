var fs = require('fs');
var axios = require('axios');

var readLines = function(){
    var array = fs.readFileSync('usage.txt').toString().split("\n");
    var config = { proxy: { port: 3000} };
    for (let i = 101; i < 102; i++) {
        console.log(array[i]);
        axios
            .post('/word', {
            word: array[i]
            }, config)
            .then(function(response){
            console.log(response);
            })
            .catch(function(error){
            console.log(error);
            })
    }
}
readLines();