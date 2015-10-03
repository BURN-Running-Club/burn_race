exports.index = function(req, res) {
	//TODO: before we have a home page, use first race page
	res.render('pages/coyote-hills/index.html');
};

exports.components = function(req, res) {
	res.render('components/' + req.params.component + '/' + req.params.component + '.html')
}

exports.test = function(req, res){
	res.render('test.html');
};

exports.notfound = function (req, res) {
	res.render('404.html');
};
