using Reinforced.Lattice.Configuration;

namespace Reinforced.Lattice.CaseStudies.CellsTemplating.Models
{
    public static class UsersTable
    {
        public static Configurator<User, UserRow> Configure(this Configurator<User, UserRow> conf)
        {
            return conf;
        }
    }
}