using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Reinforced.Lattice.CaseStudies.Filtering.Data;
using Reinforced.Lattice.CaseStudies.Filtering.Models;
using Reinforced.Lattice.Configuration;
using Reinforced.Lattice.Mvc;

namespace Reinforced.Lattice.CaseStudies.Filtering.Controllers
{
    public class RangeFilterController : Controller
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
                    .ConfigureRangeFilters()
                    .Url(Url.Action("HandleTable"))
            };
        }

        public ActionResult HandleTable()
        {
            var conf = new Configurator<Contract, ContractRow>().ConfigureRangeFilters();
            var handler = conf.CreateMvcHandler(ControllerContext);
            var q = DataService.GetAllData();
            return handler.Handle(q);
        }

        public DataService<Contract> DataService { get; private set; }

        public RangeFilterController()
        {
            DataService = new DataService<Contract>();
            DataService.SetData(MvcApplication.Data);
        }
    }
}