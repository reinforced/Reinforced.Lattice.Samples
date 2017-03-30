// Ordering property of watched form stores one of 3 
// predefined orderings

// Title property stores document title to filter by

// Use FreeOrdering to perform ordering by column
conf.FreeOrdering(q =>
    q.Form<WatchedFormViewModel>().Ordering == OrderingPreset.ByNames
        ? Ordering.Ascending.ToFilterTuple()
        : FilterTuple.None<Ordering>(),
    x => x.Title);

// Use FreeFilter to perform filtering
conf.FreeFilter(q => q.Form<WatchedFormViewModel>().Title.TupleIfNotNull(), 
    (q, v) => q.Where(x => x.Title.Contains(v)));

// Use FreeFilter to perform custom ordering
conf.FreeFilter(q =>
    q.Form<WatchedFormViewModel>().Ordering.ToFilterTuple(x => x == OrderingPreset.ByScopeRating),
    (x, v) => x.OrderByDescending(c => c.Rating).ThenByDescending(c => c.Scope));