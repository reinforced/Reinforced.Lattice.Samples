// configure simple server filter for FirstName column
conf.Column(c => c.FirstName).FilterValue(x => x.FirstName);
// type of x is TSource. By first parameter we define TSource 
// property to be filtered