conf.Column(c => c.FirstName).Format("{@} takes place {^Row.Index}");
// -> John takes place 1

conf.Column(c => c.LastName).Format("{^Column.Configuration.Title} is {@}");
// -> Last Name is Smith