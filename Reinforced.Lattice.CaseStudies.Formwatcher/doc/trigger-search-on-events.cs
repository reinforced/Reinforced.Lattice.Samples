conf.WatchForm<WatchedFormViewModel>(w =>
{
    // 10 is debouncing filter delay in milliseconds
    w.Field(x => x.Supplier).TriggerSearchOnEvents(10, "keyup");
    w.Field(x => x.Ratings).TriggerSearchOnEvents("keyup", "blur");
});