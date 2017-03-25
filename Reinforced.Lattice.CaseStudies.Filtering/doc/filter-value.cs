// configure simple server filter for FirstName column
// with default UI
conf.Column(c => c.FirstName).FilterValue(x => x.FirstName, ui => ui.ClientFiltering().Inputdelay(10));
// type of x is TSource. By first parameter we define TSource 
// property to be filtered

// If you use both cshtml and server configuration method then 
// put this into configuration method (required)
conf.Column(c => c.FirstName).FilterValueNoUi(x => x.FirstName);

// ...and put this into cshtml
conf.Column(c => c.FirstName).FilterValueUi(ui => ui.ClientFiltering().Inputdelay(10));