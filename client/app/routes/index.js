exports.index = function(req, res){
	res.render('index.html');
};

exports.test = function(req, res){
	res.render('test.html');
};

exports.races = function (req, res) {
	var name = req.params.name;
	res.render('app/coyote-hills/' + name + '.html');
};
