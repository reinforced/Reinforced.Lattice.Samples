using System.Linq;
using Reinforced.Lattice.Configuration;

namespace Reinforced.Lattice.CaseStudies.Projections.Models
{
    public static class ProjectionTable
    {
        public static Configurator<User, UserRow> ConfigureProjection(this Configurator<User, UserRow> conf)
        {
            // this is good example
            conf.ProjectDataWith(x =>
                x.Select(c => new UserRow() //<-- In case of using EntityFramework, this query will go to database
                {
                    Id = c.Id,
                    // do not use string.Format here as it doesnt have translation to SQL
                    FullName = c.FirstName + " " + c.LastName,
                    Email = c.Email,
                    IsActive = c.IsActive,
                    ManagerId = c.Manager.Id,

                    // EF will convert that to left join
                    ManagerName = c.Manager.FullName, 
                    RegistrationDate = c.RegistrationDate,

                    // and this EF will convert to CROSS APPLY
                    TotalOrder = c.Orders.Sum(d => d.Quantity * d.Price)
                }
            ));

            return conf;
        }
    }
}