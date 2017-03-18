using System.Web.Mvc;

namespace Reinforced.Lattice.CaseStudies.ColumnsOperations
{
    public class FilterConfig
    {
        public static void RegisterGlobalFilters(GlobalFilterCollection filters)
        {
            filters.Add(new HandleErrorAttribute());
        }
    }
}
