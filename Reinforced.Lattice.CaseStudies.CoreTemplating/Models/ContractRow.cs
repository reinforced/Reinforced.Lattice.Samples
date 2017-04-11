using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace Reinforced.Lattice.CaseStudies.CoreTemplating.Models
{
    public class ContractRow
    {
        public int Id { get; set; }

        public string Title { get; set; }
        public string Supplier { get; set; }

        public decimal Price { get; set; }
        public double? Tax { get; set; }

        public int Rating { get; set; }

        public Priority Priority { get; set; }

        public DateTime StartDate { get; set; }
        public DateTime? EndDate { get; set; }

        public Scope? Scope { get; set; }
    }
}