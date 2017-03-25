using Reinforced.Lattice.Configuration;

namespace Reinforced.Lattice.CaseStudies.Filtering.Models
{
    public static class UsersTable
    {
        public static Configurator<User, UserRow> Configure(this Configurator<User, UserRow> conf)
        {
            conf.Column(c=>c.Id).DataOnly();
            conf.Column(c => c.UserType).Title("Type");
            conf.Column(c => c.RegistrationDate).Title("Registered at");
            conf.Column(c => c.IsActive).Title("Active?");

            return conf;
        }
    }
}