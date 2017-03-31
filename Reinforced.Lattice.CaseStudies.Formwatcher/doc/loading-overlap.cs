// Configure loading overlap to overlap all table layout
// and also elements having filterColumn class
conf.LoadingOverlap(ui => ui.Overlap(OverlapMode.All).Overlap(".filterColumn"));