// Configure filter inclusivity 
conf.Column(c => c.StartDate)
    .FilterRange(c => c.StartDate, 
        ui => ui.Inclusive(false, false)  // set non-inclusive for client side
                .CompareOnlyDates()
    ).CompareOnlyDates()
    .Inclusive(false, false); // set non-inclusive for server side