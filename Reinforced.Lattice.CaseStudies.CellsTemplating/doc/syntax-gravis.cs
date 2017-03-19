conf.Column(c => c.Registered).Format("Registered `moment({@}).fromNow()`");
// -> Registered 3 days ago

conf.Column(c => c.Registered).Format("Registered moment({@}).fromNow()");
// -> Registered moment(25 May 2015).fromNow()