// Default value for value filter
conf.Column(c => c.Title).FilterValue(c => c.Title, ui => ui.Default("Document title"));

// Default value for select filter
conf.Column(c => c.Rating)
    .FilterSelect(c => c.Rating, ui => ui.SelectAny()
        .SelectItems(new UiListItem[]
        {
            new UiListItem() { Text = "*", Value = "1"},
            new UiListItem() { Text = "**", Value = "2"},
            new UiListItem() { Text = "***", Value = "3"},
            new UiListItem() { Text = "****", Value = "4"}, // <-- this
            new UiListItem() { Text = "*****", Value = "5"},
        }).SelectDefault(4));
        
// Default values for multi-select filter
conf.Column(c => c.Rating)
    .FilterMultiSelect(c => c.Rating, ui => ui.SelectAny()
        .SelectItems(new UiListItem[]
        {
            new UiListItem() { Text = "*", Value = "1"},
            new UiListItem() { Text = "**", Value = "2", Selected = true},   // this
            new UiListItem() { Text = "***", Value = "3", Selected = true},  // this
            new UiListItem() { Text = "****", Value = "4", Selected = true}, // and this
            new UiListItem() { Text = "*****", Value = "5"},
        }));

// Default values for range filter
conf.Column(c => c.Price).FilterRange(c => c.Price, ui => ui.RangeDefault(5000, 12000));