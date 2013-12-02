
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Home' });
};
exports.about = function(req, res){
  res.render('about', { title: 'About' });
};
exports.auto = function(req, res){
  res.render('auto', { title: 'Auto' });
};
exports.bassic = function(req, res){
  res.render('bassic', { title: 'Bassic' });
};
exports.bassment = function(req, res){
  res.render('bassment', { title: 'Bassment' });
};
exports.bio = function(req, res){
  res.render('bio', { title: 'Bio' });
};
exports.bot = function(req, res){
  res.render('bot', { title: 'Garbage Bot' });
};
exports.dmx = function(req, res){
  res.render('dmx', { title: 'Network Lighting' });
};
exports.edu = function(req, res){
  res.render('edu', { title: 'Education' });
};
exports.kyper = function(req, res){
  res.render('kyper', { title: 'Kyper' });
};
exports.portfolio = function(req, res){
  res.render('portfolio', { title: 'Portfolio' });
};
exports.pruvit = function(req, res){
  res.render('pruvit', { title: 'Pruvit' });
};
exports.resume = function(req, res){
  res.render('resume', { title: 'Resume' });
};
exports.skills = function(req, res){
  res.render('skills', { title: 'Skills' });
};
exports.tower = function(req, res){
  res.render('tower', { title: 'Wakeboard Tower' });
};
exports.work = function(req, res){
  res.render('work', { title: 'Work Experience' });
};