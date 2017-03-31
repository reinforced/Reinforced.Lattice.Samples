conf.WatchForm<WatchedFormViewModel>(w =>
{
    w.WatchAllFields();
    w.Field(x => x.FormTimeStamp).Constant(DateTime.Now);
    
    // In case if checkbox is not rendered for some reason
    w.Field(x => x.NoTax).Constant(true).SetToConstantIfNoValue();
});