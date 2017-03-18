using Reinforced.Lattice.Configuration;

namespace Reinforced.Lattice.CaseStudies.ColumnsOperations.Models
{
    public static class UsersTable
    {
        public static Configurator<User, UserRow> Configure(this Configurator<User, UserRow> conf)
        {
            conf.NotAColumn(c => c.DummyData); // important! has to be placed in configuration method
            return conf;
        }
    }
}