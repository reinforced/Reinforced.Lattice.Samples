using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Web;
using System.Web.Mvc;
using Reinforced.Lattice.CaseStudies.Ordering.Data;
using Reinforced.Lattice.CaseStudies.Ordering.Models;
using Reinforced.Lattice.Configuration;
using Reinforced.Lattice.Mvc;

namespace Reinforced.Lattice.CaseStudies.Ordering.Controllers
{
    public class RadioOrderingController : Controller
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
                            .ConfigureRadio()
                            .Url(Url.Action("HandleTable"))
            };
        }

        public ActionResult HandleTable()
        {
            Thread.Sleep(500);
            var conf = new Configurator<User, UserRow>().ConfigureRadio();
            var handler = conf.CreateMvcHandler(ControllerContext);
            var q = DataService.GetAllData();
            return handler.Handle(q);
        }

        public DataService<User> DataService { get; private set; }

        public RadioOrderingController()
        {
            DataService = new DataService<User>();
            DataService.SetData(MvcApplication.Data);
        }
    }
}