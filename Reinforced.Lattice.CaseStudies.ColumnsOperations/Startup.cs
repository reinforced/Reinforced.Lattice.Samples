using Microsoft.Owin;
using Owin;
using Reinforced.Lattice.CaseStudies.ColumnsOperations;

[assembly: OwinStartup(typeof(Reinforced.Lattice.CaseStudies.ColumnsOperations.Startup))]
namespace Reinforced.Lattice.CaseStudies.ColumnsOperations
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            
        }
    }
}
