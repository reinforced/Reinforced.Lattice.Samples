// configure multiselect filter with specified set of options
conf.Column(c => c.UserType)
        .FilterMultiSelect(c => c.UserType, 
            ui => ui.SelectItems(EnumHelper.GetSelectList(typeof(UserType))));
// type of x is TSource. By first parameter we define TSource 
// property to be filtered

// If you use both cshtml and server configuration method then 
// put this into server configuration method (required)
conf.Column(c => c.UserType).FilterMultiSelectNoUi(x => x.UserType);

// ...and put this into cshtml
conf.Column(c => c.UserType).FilterMultiSelectUi(ui => ui.SelectItems(EnumHelper.GetSelectList(typeof(UserType))));