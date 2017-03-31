conf.WatchForm<WatchedFormViewModel>(w =>
{
    w.WatchAllFields();    
    w.Field(x => x.Ratings).Selector("#txtRatings");
});