var request = require('request')
  , cheerio = require('cheerio');


var url = 'http://keralaresults.nic.in/'
var count=-1;
var check_count=0;

var check= function(){
request(url, function(err, resp, body){
  $ = cheerio.load(body);
  links = $('a'); //use your CSS selector here
  var new_count=links.length
  if(count>=0 && new_count!=count)
  		console.log("Results out");
  check_count++;
  console.log("Number of times :"+check_count)
  
});
}

setInterval(check,1000);