using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace Reinforced.Lattice.CaseStudies.Formwatcher.Models
{
    public class WatchedFormViewModel
    {
        public Priority[] Priorities { get; set; }

        [Display(Name = "Start date")]
        public DateTime? StartDateFrom { get; set; }
        public DateTime? StartDateTo { get; set; }

        [Display(Name = "Title")]
        public string Title { get; set; }

        [Display(Name = "Supplier")]
        public string Supplier { get; set; }

        [Display(Name = "Ratings")]
        public int[] Ratings { get; set; }

        public PriceRange[] PriceRanges { get; set; }

        public OrderingPreset Ordering { get; set; }

        public double? TaxFrom { get; set; }

        public double? TaxTo { get; set; }

        [Display(Name = "No taxation")]
        public bool NoTax { get; set; }

        [Display(Name = "End year")]
        public int? EndYear { get; set; }

        public DateTime FormTimeStamp { get; set; }
    }

    public enum PriceRange
    {
        From5_15,
        From15_25,
        From25_35,
        From35_40,
        From40_50,
    }

    public enum OrderingPreset
    {
        [Display(Name = "By Names")]
        ByNames,
        [Display(Name = "By Prices")]
        ByPrices,
        [Display(Name = "By Scope and Rating")]
        ByScopeRating
    }
}