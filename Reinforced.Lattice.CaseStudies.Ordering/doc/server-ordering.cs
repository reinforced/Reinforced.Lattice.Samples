// default ordering will be set to neutral
conf.Column(c => c.LastName).Orderable(x => x.LastName);
// type of x is TSource!

// configure ordering with UI parameters
conf.Column(c => c.RegistrationDate).Orderable(x => x.RegistrationDate, ui => ui.DefaultOrdering(Lattice.Ordering.Ascending))

// Specify custom ordering expression
 conf.Column(c => c.UserType).Orderable(x => x.UserType == UserType.Admin ? -1 : (int)x.UserType);