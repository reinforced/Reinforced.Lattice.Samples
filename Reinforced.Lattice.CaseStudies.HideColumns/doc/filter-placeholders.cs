// For value filter
conf.Column(c => c.FirstName).FilterValueUi(ui => ui.Placeholder("Type First Name..."));

// For range filter
conf.Column(c => c.Price).FilterRangeUi(ui => ui.Placeholders("Min. Price", "Max. Price"));