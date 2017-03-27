// Debouncing for value filter (10 ms)
conf.Column(c => c.Title).FilterValue(c => c.Title, ui => ui.ClientFiltering().Inputdelay(10));

// Debouncing for range value filter (10 ms)
conf.Column(c => c.Price).FilterRange(c => c.Price, ui => ui.ClientFiltering().Inputdelay(10));