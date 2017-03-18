using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Reinforced.Lattice.Configuration;

namespace Reinforced.Lattice.CaseStudies.Projections.Models
{
    public static class MappedFromTable
    {
        public static Configurator<User, UserRow> ConfigureMappedFrom(this Configurator<User, UserRow> conf)
        {
            // this sample runs into Select N+1 problem as far as
            // .MappedFrom consumes delegate, not lambda, so no way to convert it to SQL
            // even theoretically

            // this one seems ok...
            // we can safely use string.Format here
            conf.Column(c => c.FullName).MappedFrom(x => string.Format("{0} {1}",x.FirstName, x.LastName));

            // but here Managed will be fetched from DB !!FOR EACH!! table row
            conf.Column(c => c.ManagerId).MappedFrom(c => c.Manager.Id);
            conf.Column(c => c.ManagerName).MappedFrom(c => c.Manager.FullName); // twice! (if not cached)

            // do not ask me what will happen here
            conf.Column(c => c.TotalOrder).MappedFrom(x => x.Orders.Sum(d => d.Quantity*d.Price));

            // in conclusion - in really simple cases, .MappedFrom can
            // save space and improve readability
            
            // in complex cases it will lead to massive slowdowns
            return conf;
        }
    }
}