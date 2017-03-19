using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(Reinforced.Lattice.CaseStudies.Partition.Startup))]
namespace Reinforced.Lattice.CaseStudies.Partition
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            
        }
    }
}
