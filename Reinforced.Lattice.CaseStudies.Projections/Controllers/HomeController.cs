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
                ProjectionTable = new Configurator<User, UserRow>()
                            .ConfigureProjection().Url(Url.Action("HandleProjectionTable")),
                MappedFromTable = new Configurator<User, UserRow>()
                            .ConfigureMappedFrom().Url(Url.Action("HandleMappedFromTable"))
            };
        }

        public ActionResult HandleProjectionTable()
        {
            var conf = new Configurator<User, UserRow>().ConfigureProjection();
            var handler = conf.CreateMvcHandler(ControllerContext);
            var q = DataService.GetAllData();
            return handler.Handle(q);
        }

        public ActionResult HandleMappedFromTable()
        {
            var conf = new Configurator<User, UserRow>().ConfigureMappedFrom();
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