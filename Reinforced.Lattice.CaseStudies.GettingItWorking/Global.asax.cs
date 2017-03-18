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
using Reinforced.Lattice.CaseStudies.GettingItWorking.Data;
using Reinforced.Lattice.CaseStudies.GettingItWorking.Models;

namespace Reinforced.Lattice.CaseStudies.GettingItWorking
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
            Data = JsonConvert.DeserializeObject<List<User>>(File.ReadAllText(file),
                new IsoDateTimeConverter());
        }

        public static IList Data;

    }
}
