// configure multiselect filter with specified set of options
conf.Column(c => c.RegistrationDate).FilterRange(c => c.RegistrationDate, ui => ui.Inputdelay(10));
// type of x is TSource. By first parameter we define TSource 
// property to be filtered

// If you use both cshtml and server configuration method then 
// put this into server configuration method (required)
conf.Column(c => c.RegistrationDate).FilterRangeNoUi(c => c.RegistrationDate);

// ...and put this into cshtml
conf.Column(c => c.RegistrationDate).FilterRangeUi(ui => ui.Inputdelay(10));