// Compare dates both on server and client
conf.Column(c => c.StartDate)
    .FilterValue(c => c.StartDate,
        ui => ui.ClientFiltering().CompareOnlyDates() // for client
    ).CompareOnlyDates(); // for server