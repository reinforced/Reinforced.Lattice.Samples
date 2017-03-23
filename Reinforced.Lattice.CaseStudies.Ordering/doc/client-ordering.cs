// Enable client and server ordering for FirstName column
conf.Column(c => c.FirstName).Orderable(c => c.FirstName, ui => ui.UseClientOrdering());

// Enable client ordering for Email column without server ordering
conf.Column(c => c.Email).OrderableUi(ui => ui.UseClientOrdering());