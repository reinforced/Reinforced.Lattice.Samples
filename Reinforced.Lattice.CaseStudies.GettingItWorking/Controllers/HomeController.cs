using System.Web.Mvc;
using System.Web.Routing;
using Reinforced.Lattice.CaseStudies.GettingItWorking.Data;
using Reinforced.Lattice.CaseStudies.GettingItWorking.Models;

// Reference Reinforced.Lattice.Configuration from Reinforced.Lattice.dll
using Reinforced.Lattice.Configuration;

// Reference Reinforced.Lattice.Mvc from Reinforced.Lattice.Mvc5.dll
using Reinforced.Lattice.Mvc;

namespace Reinforced.Lattice.CaseStudies.GettingItWorking.Controllers
{
    public class HomeController : Controller
    {
        
        // Our page index action. Returns Index.cshtml 
        // wrapped into _Layout.cshtml
        public ActionResult Index()
        {
            return View(GenerateViewModel());
        }

        // Our ViewModel
        public HomeIndexViewModel GenerateViewModel()
        {
            return new HomeIndexViewModel()
            {
                Table = new Configurator<User, UserRow>()   // create our configurator instance 
                            .Configure()                    // configure it with extension method from UsersTable.cs
                            .Url(Url.Action("HandleTable")) // Set handle method URL. We use Url.Action to be more consistent
            };
        }

        // Our handle method for table
        // Handle method will be used to perform all communications with table
        // Table wwill call it when needed using .Url supplied above
        // Nothing more should be added here for now
        public ActionResult HandleTable()
        {
            // First, create our configurator and configure it
            // (we do not set .Url as it is not needed anymore)
            var conf = new Configurator<User,UserRow>().Configure();

            // Then, create MVC handler from our configurator
            var handler = conf.CreateMvcHandler(ControllerContext);

            // Obtain IQueryable<TSource> with source entities from our 
            // data service
            var q = DataService.GetAllData();

            // Call handler.Handle - it will return necessary ActionResult
            return handler.Handle(q);
        }

        // Our data service. It supplies data as IQueryable<TSource>
        // Usually it is conencted to DB
        public DataService<User> DataService { get; private set; }

        // Controller constructor that you shouldn't pay attention to
        // We just initialize our data service here 
        public HomeController()
        {
            DataService = new DataService<User>();
            DataService.SetData(MvcApplication.Data);
        }
    }
}