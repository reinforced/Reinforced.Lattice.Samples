using System.Web.Mvc;

namespace Reinforced.Lattice.CaseStudies.Projections
{
    public class FilterConfig
    {
        public static void RegisterGlobalFilters(GlobalFilterCollection filters)
        {
            filters.Add(new HandleErrorAttribute());
        }
    }
}
