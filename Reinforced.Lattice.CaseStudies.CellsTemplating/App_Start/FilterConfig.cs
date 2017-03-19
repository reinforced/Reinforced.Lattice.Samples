using System.Web;
using System.Web.Mvc;

namespace Reinforced.Lattice.CaseStudies.CellsTemplating
{
    public class FilterConfig
    {
        public static void RegisterGlobalFilters(GlobalFilterCollection filters)
        {
            filters.Add(new HandleErrorAttribute());
        }
    }
}
