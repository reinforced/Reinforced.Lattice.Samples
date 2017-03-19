conf.Limit(ui => ui.Values(new[] { "All", "-", "10", "20", "50", "100" }), where: "lt");
// .Values consumes arra of strings:
// "-" will be displayed as menu separator
// "All" and other textual values will trigger displaying of all available records
// "10", "20" etc numeric values will trigger displaying of corresponding number of records