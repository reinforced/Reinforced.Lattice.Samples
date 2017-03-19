using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Policy;
using System.Web;
using System.Web.Mvc;
using Reinforced.Lattice.CaseStudies.Partition.Data;
using Reinforced.Lattice.CaseStudies.Partition.Models;
using Reinforced.Lattice.Configuration;
using Reinforced.Lattice.Mvc;

namespace Reinforced.Lattice.CaseStudies.Partition.Controllers
{
    public class ServerPagingController : Controller
    {
        public ActionResult Index()
        {
            return View(GenerateViewModel());
        }


        public HomeIndexViewModel GenerateViewModel()
        {
            return new HomeIndexViewModel()
            {
                ScrollbarTable = new Configurator<Product, Product>()
                            .ConfigureServerPartition()
                            .Url(Url.Action("HandleScrollbarTable")),
                PagingTable = new Configurator<Product, Product>()
                            .ConfigureServerPartition()
                            .Url(Url.Action("HandlePagingTable"))
            };
        }

        public ActionResult HandleScrollbarTable()
        {
            var conf = new Configurator<Product, Product>().ConfigureClientPartition();
            var handler = conf.CreateMvcHandler(ControllerContext);
            var q = DataService.GetAllData();
            return handler.Handle(q);
        }

        // for tutorials website
        public ActionResult HandlePagingTable()
        {
            return HandleScrollbarTable();
        }

        public DataService<Product> DataService { get; private set; }

        public ServerPagingController()
        {
            DataService = new DataService<Product>();
            DataService.SetData(MvcApplication.Data);
        }
    }
}