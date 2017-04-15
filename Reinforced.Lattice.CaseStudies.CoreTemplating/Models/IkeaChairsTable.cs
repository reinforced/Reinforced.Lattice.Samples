using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Reinforced.Lattice.Configuration;

namespace Reinforced.Lattice.CaseStudies.CoreTemplating.Models
{
    public static class IkeaChairsTable
    {
        public static Configurator<IkeaChair, IkeaChairRow> IkeaChairs(this Configurator<IkeaChair, IkeaChairRow> conf)
        {
            conf.PrimaryKey(c => c.Id);
            conf.ProjectDataWith(c => c.Select(x => new IkeaChairRow()
            {
                Price = x.Price,
                Name = x.Name,
                Id = x.Id,
                Category = x.Category,
                Colors = string.Join(" ",x.Colors.Select(d=>((int)d).ToString()).ToArray()),
                Description = x.Description,
                IsByableOnline = x.IsByableOnline,
                IsSpecialPrice = x.IsSpecialPrice,
                Link = x.Link,
                PictureUrl = x.PictureUrl,
                Size = x.Size
            }));
            return conf;
        }
    }
}