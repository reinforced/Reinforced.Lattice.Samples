conf.WatchForm<WatchedFormViewModel>(w =>
{
    w.WatchAllFields();
    w.Field(x => x.NotSoImportant).Ignore();
});
