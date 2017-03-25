using System.Web.Mvc;
using System.Web.Routing;
using Reinforced.Lattice.CaseStudies.Filtering.Data;
using Reinforced.Lattice.CaseStudies.Filtering.Models;
using Reinforced.Lattice.Configuration;
using Reinforced.Lattice.Mvc;

namespace Reinforced.Lattice.CaseStudies.Filtering.Controllers
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
                Table = new Configurator<User, UserRow>()  
                            .Configure()                   
                            .Url(Url.Action("HandleTable"))
            };
        }

        public ActionResult HandleTable()
        {
            var conf = new Configurator<User,UserRow>().Configure();
            var handler = conf.CreateMvcHandler(ControllerContext);
            var q = DataService.GetAllData();
            return handler.Handle(q);
        }

        public DataService<User> DataService { get; private set; }

        public HomeController()
        {
            DataService = new DataService<User>();
            DataService.SetData(MvcApplication.Data);
        }
    }
}