var sl = {
	
};

sl.leg = {
	// Return all congressmen from the requested zip
	zip: function(zip) {
		$.getJSON('leg/zip/'+zip, function(response) {
			return response;
		});
	}
};


var ip = {
	loc: function(callback) {
		$.getJSON('leg/loc', callback);
	},
	ip: function(callback) {
		$.getJSON('leg/ip', callback);
	}
}