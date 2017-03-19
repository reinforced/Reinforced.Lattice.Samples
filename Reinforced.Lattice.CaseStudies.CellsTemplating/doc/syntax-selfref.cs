conf.Column(c => c.Rating).Format("Rating: {@}");
// -> Rating: 5

conf.Column(c => c.FirstName).Format("First name: {@}");
// -> First name: John

conf.Column(c => c.LastName).Format("Last name: {@}");
// -> Last name: Smith