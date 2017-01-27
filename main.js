
var JSONFileReader = require('./json-file-reader'),
    ourArgument = process.argv[2];


JSONFileReader.readFile('countries.json', function(error, data) {
  var country;

  if (error) {
    throw error;
  }

  data.forEach(function(element) {
    if (element.name === ourArgument) {
      country = element;
			console.log(country);

    }
  });
	if(!country){
		console.log("couldn't find this country");
	}

});
