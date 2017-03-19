using Reinforced.Lattice.Configuration;

namespace Reinforced.Lattice.CaseStudies.Partition.Models
{
    public class HomeIndexViewModel
    {
        public Configurator<Product,Product> ScrollbarTable { get; set; }
        public Configurator<Product,Product> PagingTable { get; set; }
    }
}