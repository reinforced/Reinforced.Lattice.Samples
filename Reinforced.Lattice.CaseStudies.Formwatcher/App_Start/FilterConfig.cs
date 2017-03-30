using System.Web;
using System.Web.Mvc;

namespace Reinforced.Lattice.CaseStudies.Formwatcher
{
    public class FilterConfig
    {
        public static void RegisterGlobalFilters(GlobalFilterCollection filters)
        {
            filters.Add(new HandleErrorAttribute());
        }
    }
}
