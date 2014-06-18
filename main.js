var request = require('request')
  , cheerio = require('cheerio');

var growl = require('growl');

var url = process.argv[2];
var count=-1;
growl("Monitoring "+process.argv[2])

var check= function(){
request(url, function(err, resp, body){
  $ = cheerio.load(body);
  links = $('a'); //use your CSS selector here
  var new_count=links.length
  if(count==-1)
  		count=new_count

  if(new_count!=count)
  		{
  		 growl('Results Out !!');
       
  		}
  
  
});
}

setInterval(check,10000);