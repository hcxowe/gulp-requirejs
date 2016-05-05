define(['aaa'],function(aaa){
	var add10 = function(x){
		return aaa.add(x, x) + 10;
	};
	
	return {
		add10 : add10
	};
});