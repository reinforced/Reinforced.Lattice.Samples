// Extract LatticeRequest within your handle method
public ActionResult HandleTable()
{
    // Create and prepare configurator
    var conf = new Configurator<Contract, ContractRow>().ConfigureFormWatcher();
    // Create handler
    var handler = conf.CreateMvcHandler(ControllerContext);
    // Use it to extract LatticeRequest from incoming HTTP request
    LatticeRequest req = handler.ExtractRequest();
    // Use Query field of LatticeRequest to obtain query object
    Query lq = req.Query;
    
    // Use .Form<> method either on LatticeRequest or Query
    var formData = lq.Form<WatchedFormViewModel>();
    var sameFormData = req.Form<WatchedFormViewModel>();
    
    var q = DataService.GetAllData();
    return handler.Handle(q);
}

// Or use it within .Value() method of filter
conf.Column(c => c.Price)
    .FilterValueBy((q, v) => q.Where(x => x.Price > v))
    .Value(q =>
    {
        var formData = q.Form<WatchedFormViewModel>();
        return formData.Price.TupleIfNotNull();
    });