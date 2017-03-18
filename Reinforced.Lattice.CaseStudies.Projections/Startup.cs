using Microsoft.Owin;
using Owin;
using Reinforced.Lattice.CaseStudies.Projections;

[assembly: OwinStartup(typeof(Startup))]
namespace Reinforced.Lattice.CaseStudies.Projections
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            
        }
    }
}
