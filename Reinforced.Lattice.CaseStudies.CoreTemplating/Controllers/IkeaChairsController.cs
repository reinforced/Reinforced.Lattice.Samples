using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Reinforced.Lattice.Adjustments;
using Reinforced.Lattice.CaseStudies.CoreTemplating.Data;
using Reinforced.Lattice.CaseStudies.CoreTemplating.Models;
using Reinforced.Lattice.Commands;
using Reinforced.Lattice.Configuration;
using Reinforced.Lattice.Mvc;
using Reinforced.Lattice.Processing;

namespace Reinforced.Lattice.CaseStudies.CoreTemplating.Controllers
{
    public class IkeaChairsController : Controller
    {

        public ActionResult Index()
        {
            return View(GenerateViewModel());
        }

        public IkeaChairsViewModel GenerateViewModel()
        {
            return new IkeaChairsViewModel()
            {
                Table = new Configurator<IkeaChair, IkeaChairRow>()
                    .IkeaChairs()
                    .Url(Url.Action("HandleTable"))
            };
        }

        public ActionResult HandleTable()
        {
            var conf = new Configurator<IkeaChair, IkeaChairRow>().IkeaChairs();
            var handler = conf.CreateMvcHandler(ControllerContext);
           
            return handler.Handle(DataService.GetAllData().AsQueryable());
        }

        public DataService<IkeaChair> DataService { get; private set; }

        public IkeaChairsController()
        {
            DataService = new DataService<IkeaChair>();
            DataService.SetData(MvcApplication.Chairs);
        }
    }
}