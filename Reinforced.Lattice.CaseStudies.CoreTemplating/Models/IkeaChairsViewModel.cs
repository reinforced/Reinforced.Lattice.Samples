using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Reinforced.Lattice.Configuration;

namespace Reinforced.Lattice.CaseStudies.CoreTemplating.Models
{
    public class IkeaChairsViewModel
    {
        public Configurator<IkeaChair, IkeaChairRow> Table { get; set; }
    }

    public class IkeaChairsFilterViewModel
    {
        public Category? Category { get; set; }

        public string Color { get; set; }

        public decimal? PriceFrom { get; set; }

        public decimal? PriceTo { get; set; }

        public bool? ByableOnline { get; set; }
    }
}