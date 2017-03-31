conf.WatchForm<WatchedFormViewModel>(w =>
{
    w.WatchAllFields();    
    w.Field(x => x.StartDateFrom).AutoDatePicker();
    w.Field(x => x.StartDateTo).AutoDatePicker();
});