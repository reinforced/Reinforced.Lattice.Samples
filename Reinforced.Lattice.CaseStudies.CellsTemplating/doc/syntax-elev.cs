conf.Column(c => c.FirstName).Format("{@} takes place {^Row.Index}");
conf.Column(c => c.LastName).Format("{^Column.Configuration.Title} is {@}");