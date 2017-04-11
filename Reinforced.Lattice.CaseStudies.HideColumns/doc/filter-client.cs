// For value filter
conf.Column(c => c.FirstName).FilterValueUi(ui => ui.ClientFiltering());
// For range filter
conf.Column(c => c.Price).FilterRangeUi(ui => ui.ClientFiltering());
// For select filter
conf.Column(c => c.UserType).FilterSelectUi(ui => ui.ClientFiltering());
// For multi-select filter
conf.Column(c => c.DocumentType).FilterMultiSelectUi(ui => ui.ClientFiltering());