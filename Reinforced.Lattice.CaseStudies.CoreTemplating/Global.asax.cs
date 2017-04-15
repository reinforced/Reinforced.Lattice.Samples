using System;
using System.Collections;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Optimization;
using System.Web.Routing;
using Newtonsoft.Json;
using Newtonsoft.Json.Converters;
using Reinforced.Lattice.CaseStudies.CoreTemplating.Data;
using Reinforced.Lattice.CaseStudies.CoreTemplating.Models;

namespace Reinforced.Lattice.CaseStudies.CoreTemplating
{
    public class MvcApplication : System.Web.HttpApplication
    {
        protected void Application_Start()
        {
            AreaRegistration.RegisterAllAreas();
            FilterConfig.RegisterGlobalFilters(GlobalFilters.Filters);
            RouteConfig.RegisterRoutes(RouteTable.Routes);
            BundleConfig.RegisterBundles(BundleTable.Bundles);

            var file = HttpContext.Current.Server.MapPath("~/App_Data/data.json");
            var chairs = HttpContext.Current.Server.MapPath("~/App_Data/chairs.json");
            Data = JsonConvert.DeserializeObject<List<Contract>>(File.ReadAllText(file),
                new IsoDateTimeConverter());
            Chairs = JsonConvert.DeserializeObject<List<IkeaChair>>(File.ReadAllText(chairs),
                new IsoDateTimeConverter());
        }

        public static IList Data;
        public static IList Chairs;

    }
}
