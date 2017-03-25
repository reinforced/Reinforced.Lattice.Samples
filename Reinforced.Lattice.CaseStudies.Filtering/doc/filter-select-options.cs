conf.Column(c => c.UserType2).FilterSelect(c => c.UserType,
        ui => ui                                                    // ***
        .SelectAny().SelectNotPresent()                             // case 1
        .SelectItems(new UiListItem[]                               // ***
        {
            new UiListItem() {Text = "Admin",Value = "0"},
            new UiListItem() {Text = "Customer",Value = "1"},
        }));
// -----
conf.Column(c => c.UserType2).FilterSelect(c => c.UserType,
    ui => ui                                                        // ***
        .SelectItems(new UiListItem[]                               // case 2
        {                                                           // ***
            new UiListItem() {Text = "Admin",Value = "0"},          
            new UiListItem() {Text = "Customer",Value = "1"},
        })
        .SelectAny().SelectNotPresent());