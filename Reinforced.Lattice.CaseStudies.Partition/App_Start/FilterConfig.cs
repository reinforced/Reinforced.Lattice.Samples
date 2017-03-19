using System.Web;
using System.Web.Mvc;

namespace Reinforced.Lattice.CaseStudies.Partition
{
    public class FilterConfig
    {
        public static void RegisterGlobalFilters(GlobalFilterCollection filters)
        {
            filters.Add(new HandleErrorAttribute());
        }
    }
}
