// Override client value filter function to limit price
// using `{@}`-expression
conf.Column(c => c.Price).FilterValueUi(c => c.ClientFilteringExpression("{@} < x"));