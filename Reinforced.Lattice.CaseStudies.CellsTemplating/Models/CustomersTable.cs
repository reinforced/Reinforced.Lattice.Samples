using Reinforced.Lattice.Configuration;

namespace Reinforced.Lattice.CaseStudies.CellsTemplating.Models
{
    public static class CustomersTable
    {
        public static Configurator<Customer, CustomerRow> Configure(this Configurator<Customer, CustomerRow> conf)
        {
            return conf;
        }
    }
}