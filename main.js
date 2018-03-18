
var waitDOMContentsLoaded = function() {
	return (new Promise(function(suc, err){
		var runonce = function() {
			document.removeEventListener('readystatechange', runonce);
			suc();
		};
		(
			document.readyState === 'loading'
			? document.addEventListener('readystatechange', runonce)
			: suc()
		);
	}));
};

waitDOMContentsLoaded()
.then(function(){
	var p = document.createElement('p');
	p.append(document.createTextNode('hoge'));
	document.body.append(p);
});
