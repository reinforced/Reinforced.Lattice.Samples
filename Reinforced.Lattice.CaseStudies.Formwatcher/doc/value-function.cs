// Use inline function
w.Field(x => x.NoTax).ValueFunction("function() { return $('#noTaxCheckbox').is(':checked'); }");

// Or function name
w.Field(x => x.Title).ValueFunction("extractTitle");