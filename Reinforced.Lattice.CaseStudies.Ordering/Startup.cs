using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(Reinforced.Lattice.CaseStudies.Ordering.Startup))]
namespace Reinforced.Lattice.CaseStudies.Ordering
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            
        }
    }
}
