// Reference Reinforced.Lattice.Configuration

using Reinforced.Lattice.Configuration;

namespace Reinforced.Lattice.CaseStudies.Projections.Models
{
    // ViewModel for our index page
    public class HomeIndexViewModel
    {
        public Configurator<User,UserRow> ProjectionTable { get; set; }
        public Configurator<User,UserRow> MappedFromTable { get; set; }
    }
}