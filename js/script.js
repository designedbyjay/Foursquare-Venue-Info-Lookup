/* Author: 

*/



/*function fsq(venue, callback){
	if (!venue) {
		alert('No available data for query');
		return false;
	}
	var yql = 'http://query.yahooapis.com/v1/public/yql?q=' +
				encodeURIComponent('select * from foursquare.venue where vid="' + venue + '"' ) 
				+ 'http://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20foursquare.venue%20where%20vid%3D%22125694%22&format=json&diagnostics=true&'
				+ 'env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback=?';
				
				
	$.getJSON(yql, cb);
	
	function cb(data){
		console.log(data);
	};
}

$(document).ready(function() {
	
	
	$('form').submit(function() {
		var path = $('#sitename').val();

		fsq(path, function(results) {
			$('#container').html(results);
		});

		return false;
	});
	
	
});*/

 

	

$(document).ready(function() {
	
	$('#venues a').click(function(){
		var path = $(this).attr('data-venue');
		
		var result = $(this).next('div');
		
		if (!path){
			alert('No venue was passed.');
			return false;
		}

		var yql = 'http://query.yahooapis.com/v1/public/yql?q=' + encodeURIComponent('select * from foursquare.venue where vid="' + path + '"') + '&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback=?';
		
		$.getJSON(yql, function(data){
			result.append(
				'<ul>'
			 	 
				+ '<li> <strong>Total Check Ins:</strong> ' + data.query.results.venue.stats.checkins + '</li>'
				
				+ '<li><strong>Current Mayor</strong> <div class="media mayor"><div class="img"><img width="50" height="50" src="' + data.query.results.venue.stats.mayor.user.photo + '" /></div><div class="bd">' 
				 + '<h2>'+ data.query.results.venue.stats.mayor.user.firstname + '&nbsp;' + data.query.results.venue.stats.mayor.user.lastname + '</h2>' + '</div><div class="count">' + data.query.results.venue.stats.mayor.count + '<span class="label"> Checkins</span></div></div></li>'
				
				+ '</ul>'
			);
		});
		
	});
	
});



 
	
	


/*$.getJSON('http://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20foursquare.venue%20where%20vid%3D%221%22&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback=?', function(data){
		
	template = "<h1>{{id}}</h1>";

	html = Mustache.to_html(template);


	document.write(html);
});*/








	




















