using System.Threading;
using System.Web.Mvc;
using System.Web.Routing;
using Reinforced.Lattice.CaseStudies.Formwatcher.Data;
using Reinforced.Lattice.CaseStudies.Formwatcher.Models;
using Reinforced.Lattice.Configuration;
using Reinforced.Lattice.Mvc;
using Reinforced.Lattice.Plugins.Formwatch;

namespace Reinforced.Lattice.CaseStudies.Formwatcher.Controllers
{
    public class HomeController : Controller
    {
        
        public ActionResult Index()
        {
            return View(GenerateViewModel());
        }

        public HomeIndexViewModel GenerateViewModel()
        {
            return new HomeIndexViewModel()
            {
                Table = new Configurator<Contract, ContractRow>()  
                            .ConfigureFormWatcher()                   
                            .Url(Url.Action("HandleTable"))
            };
        }

        public ActionResult HandleTable()
        {
            var conf = new Configurator<Contract, ContractRow>().ConfigureFormWatcher();
            var handler = conf.CreateMvcHandler(ControllerContext);
            LatticeRequest req = handler.ExtractRequest();
            Query lq = req.Query;
            var formData = lq.Form<WatchedFormViewModel>();
            var sameFormData = req.Form<WatchedFormViewModel>();
            var q = DataService.GetAllData();
            return handler.Handle(q);
        }

        public DataService<Contract> DataService { get; private set; }

        public HomeController()
        {
            DataService = new DataService<Contract>();
            DataService.SetData(MvcApplication.Data);
        }
    }
}