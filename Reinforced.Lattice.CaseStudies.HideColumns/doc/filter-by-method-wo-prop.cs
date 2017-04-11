// Value filter delegate
// All prices lower than specified 
// filter value will be filtered out
conf.Column(c => c.Price).FilterValueNoUiBy((q, v) => q.Where(x => x.Price < v));

// Multiselect filter delegate
// If any negative value selected then source set will
// not be modified
conf.Column(c => c.Price).FilterMultiSelectNoUiBy(
    (q, v) => v.Any(x => x < 0) ? q : q.Where(x => v.Contains(x.Price))
);

// Range filter delegate
// Works only if From and To values are both provided
// If From > To, swaps From and To
conf.Column(c => c.Price).FilterRangeNoUiBy(
    (q, v) => (v.HasTo && v.HasFrom)
            ? (v.To >= v.From
                ? q.Where(x => x.Price > v.From && x.Price < v.To)
                : q.Where(x => x.Price > v.To && x.Price < v.From))
            : q
);