using Reinforced.Lattice.Configuration;
using Reinforced.Lattice.Plugins.Ordering;

namespace Reinforced.Lattice.CaseStudies.Ordering.Models
{
    public static class UsersTable
    {
        public static Configurator<User, UserRow> Configure(this Configurator<User, UserRow> conf)
        {
            conf.Column(c => c.Id).DataOnly();

            conf.Column(c => c.LastName)
                .Orderable(c => c.LastName); // type of C is User (TRow)

            conf.Column(c => c.UserType)
                .Orderable(c => c.UserType == UserType.Admin ? -1 : (int)c.UserType);

            conf.Column(c => c.RegistrationDate) // client ordering, but server one also persisted
                .Orderable(c => c.RegistrationDate, ui => ui.UseClientOrdering());

            return conf;
        }
    }
}