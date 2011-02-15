/* Author: 
Chad Hietala
*/


function fsq(venue, callback){
	
	if (!venue){
		alert('No venue was passed.');
		return false;
	}

	var yql = 'http://query.yahooapis.com/v1/public/yql?q=' + encodeURIComponent('select * from foursquare.venue where vid="' + venue + '"') + '&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback=?';

	$.getJSON(yql, cbFunc);
	
	function cbFunc(data){
		if(!data.query.results.venue.stats.mayor){
			alert('No Data sorry');
		}	
		if (typeof callback === 'function'){
			callback (
			'<ul>'
			+ '<li> <strong>Total Check Ins:</strong> <span class="count">' + data.query.results.venue.stats.checkins + '</span></li>'
			+ '<li><strong>Current Mayor</strong> <div class="media mayor"><div class="img"><img width="50" height="50" src="' + data.query.results.venue.stats.mayor.user.photo + '" /></div><div class="bd">' 
			 + '<h2>'+ data.query.results.venue.stats.mayor.user.firstname + '&nbsp;' + data.query.results.venue.stats.mayor.user.lastname + '</h2>' + '</div><div class="count">' + data.query.results.venue.stats.mayor.count + '<span class="label"> Checkins</span></div></div></li>'

			+ '</ul>');
		}
	};
}

$(document).ready(function() {
	$('#venues a').click(function(){
		event.preventDefault();
		var path = $(this).attr('data-venue');
		var result = $(this).next('div');
		
		if(result.is(":hidden")){
		 fsq(path, function(results){
					if(result.is(":empty")){
						result.append(results);
					}
		});
			result.delay(100).slideDown();
	 	}else
		{
			result.slideUp();
		}
	});
	
		
	
});






	




















