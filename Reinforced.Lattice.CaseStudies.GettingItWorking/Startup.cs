using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(Reinforced.Lattice.CaseStudies.GettingItWorking.Startup))]
namespace Reinforced.Lattice.CaseStudies.GettingItWorking
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            
        }
    }
}
