using System.Web.Mvc;
using Reinforced.Lattice.CaseStudies.Projections.Data;
using Reinforced.Lattice.CaseStudies.Projections.Models;
using Reinforced.Lattice.Configuration;
using Reinforced.Lattice.Mvc;

namespace Reinforced.Lattice.CaseStudies.Projections.Controllers
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
                Table = new Configurator<User, UserRow>()   // create our configurator instance 
                            .ConfigureProjection()                    // configure it with extension method from UsersTable.cs
                            .Url(Url.Action("HandleTable")) // Set handle method URL. We use Url.Action to be more consistent
            };
        }

        public ActionResult HandleTable()
        {
            return null;
        }


        public DataService<User> DataService { get; private set; }
        public HomeController()
        {
            DataService = new DataService<User>();
            DataService.SetData(MvcApplication.Data);
        }
    }
}