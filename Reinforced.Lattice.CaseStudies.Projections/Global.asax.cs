using System.Collections;
using System.Collections.Generic;
using System.IO;
using System.Web;
using System.Web.Mvc;
using System.Web.Optimization;
using System.Web.Routing;
using Newtonsoft.Json;
using Newtonsoft.Json.Converters;
using Reinforced.Lattice.CaseStudies.Projections.Models;

namespace Reinforced.Lattice.CaseStudies.Projections
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
