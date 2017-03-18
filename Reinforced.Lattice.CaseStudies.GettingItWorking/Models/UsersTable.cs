// Reference Reinforced.Lattice.Configuration here
using Reinforced.Lattice.Configuration;

namespace Reinforced.Lattice.CaseStudies.GettingItWorking.Models
{
    public static class UsersTable
    {
        // Our table configuration method
        public static Configurator<User, UserRow> Configure(this Configurator<User, UserRow> conf)
        {
            // Let's hide UserRow.Id column just in case

            conf.Column(c=>c.Id).DataOnly();
//         |                    |
//         |                    |
//         ----------------------
//              ^-- That's how we select columns for configuration
//                  Use .Column(lambda poiting to TRow property)

            // Let's also specify some titles here
            conf.Column(c => c.UserType).Title("Type");
            conf.Column(c => c.RegistrationDate).Title("Registered at");
            conf.Column(c => c.IsActive).Title("Active?");

            return conf;
        }
    }
}