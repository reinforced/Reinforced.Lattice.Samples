conf.WatchForm<WatchedFormViewModel>(w =>
{
    w.WatchAllFields();
    
    w.FilterColumn(conf, x => x.StartDate).FilterRange(x => x.StartDateFrom, x => x.StartDateTo);
    // To provide values only for client filter and do not send them to server
    // use .ClientServer(server:false) call    
    w.FilterColumn(conf, x => x.Supplier).FilterValue(x => x.Supplier).ClientServer(server: false);
    
    // Combine with triggering search on keyboard events
    w.Field(x => x.Supplier).TriggerSearchOnEvents(10, "keyup").DoNotEmbedToQuery();
    // We use DoNotEmbedToQuery to avoid embedding this field to AdditionalData
    // Just to do not reload our table involving server
    // That is how we move client filter to watched form
});

// Do not forget to configure filters!
// Use .HideFilter to hide filter from UI
conf.Column(c => c.StartDate).FilterRange(c => c.StartDate, c => c.HideFilter());
conf.Column(c => c.Supplier).FilterValue(c => c.Supplier, x => x.ClientFiltering().HideFilter());