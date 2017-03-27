// Override filtering key extraction for Tax column adn value filter
// in order to make it feel not difference between percentage and portion import.
// If value is more than 10 then it will convert it to value from 0 to 1
conf.Column(c => c.Tax)
    .FilterValueBy((q, v) => q.Where(x => x.Tax > v))
    .Value(q =>
    {
        if (!q.Filterings.ContainsKey("Tax")) return FilterTuple.None<double?>();
        var f = q.Filterings["Tax"];
        if (string.IsNullOrEmpty(f)) return FilterTuple.None<double?>();
        var d = ValueConverter.Convert<double>(f);
        if (d > 10) d = d / 100;
        return ((double?)d).ToFilterTuple();
    });
    
// Exactly the same but for range filter
conf.Column(c => c.Tax).FilterRange(c=>c.Tax).Value(ExtractTaxRange);

private static Tuple<bool, RangeTuple<double?>> ExtractTaxRange(Query q)
{
    if (!q.Filterings.ContainsKey("Tax")) return FilterTuple.None<RangeTuple<double?>>();
    var f = q.Filterings["Tax"];
    if (string.IsNullOrEmpty(f)) return FilterTuple.None<RangeTuple<double?>>();
    var spl = f.Split('|');
    var sFrom = spl[0];
    var sTo = spl[1];
    var from = string.IsNullOrEmpty(sFrom) ? (double?)null : ValueConverter.Convert<double>(sFrom);
    var to = string.IsNullOrEmpty(sTo) ? (double?)null : ValueConverter.Convert<double>(sTo);
    if (from.HasValue && from > 10) from = from / 100;
    if (to.HasValue && to > 10) to = to / 100;
    var rng = new RangeTuple<double?>
    {
        From = from,
        HasFrom = from.HasValue,
        To = to,
        HasTo = to.HasValue
    };
    return rng.ToFilterTuple();
}