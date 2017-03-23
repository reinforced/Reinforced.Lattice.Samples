// specify client ordering by function
conf.Column(c => c.Email).OrderableUi(c => c.UseClientOrdering("orderByEmailDomain"));

// specify client ordering using `{@}`-notation
// here we specify similar orderings for client-side and for server-side
conf.Column(c => c.FirstName)
    .Orderable( c => c.FirstName=="Janet" ? 1 : 0,
                ui => ui.UseClientOrderingNumericExpression("({FirstName}=='Janet'?1:0)"))
