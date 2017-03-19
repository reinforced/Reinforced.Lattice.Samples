using System.Web.Mvc;
using System.Web.Routing;
using Reinforced.Lattice.CaseStudies.CellsTemplating.Data;
using Reinforced.Lattice.CaseStudies.CellsTemplating.Models;
using Reinforced.Lattice.Configuration;
using Reinforced.Lattice.Mvc;

namespace Reinforced.Lattice.CaseStudies.CellsTemplating.Controllers
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
                Table = new Configurator<Customer, CustomerRow>() 
                            .Configure()                    
                            .Url(Url.Action("HandleTable")) 
            };
        }
       
        public ActionResult HandleTable()
        {
           var conf = new Configurator<Customer, CustomerRow>().Configure();
            var handler = conf.CreateMvcHandler(ControllerContext);
            var q = DataService.GetAllData();
            return handler.Handle(q);
        }

        
        public DataService<Customer> DataService { get; private set; }

        
        public HomeController()
        {
            DataService = new DataService<Customer>();
            DataService.SetData(MvcApplication.Data);
        }
    }
}