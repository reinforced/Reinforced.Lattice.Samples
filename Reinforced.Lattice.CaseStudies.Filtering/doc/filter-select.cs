// configure select filter with specified set of options
// 
conf.Column(c => c.UserType)
       .FilterSelect(c => c.UserType, 
            ui => ui.SelectItems(EnumHelper.GetSelectList(typeof(UserType))));
// type of x is TSource. By first parameter we define TSource 
// property to be filtered

// If you use both cshtml and server configuration method then 
// put this into server configuration method (required)
// 
// (There is no *NoUi method for .FilterSelect since it works exactly the same as
// value filter on server side, so use value filter in configuration method)
conf.Column(c => c.UserType).FilterValueNoUi(x => x.UserType);

// ...and put this into cshtml
conf.Column(c => c.UserType).FilterSelectUi(ui => ui.SelectItems(EnumHelper.GetSelectList(typeof(UserType))));