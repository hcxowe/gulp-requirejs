require.config({
	paths: {
		"jquery": "jquery",
		"aaa": "aaa",
		"bbb": "bbb"
	}
});

require(['jquery', 'aaa', 'bbb'], function($, aaa, bbb){
	
	$('div').css('border', '1px solid #dbdbdb');
	
	alert(aaa.add(1,1)+bbb.add10(1));
	
});
