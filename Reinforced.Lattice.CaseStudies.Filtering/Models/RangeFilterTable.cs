using System;
using System.Linq;
using System.Web.Mvc.Html;
using Reinforced.Lattice.CellTemplating;
using Reinforced.Lattice.Configuration;
using Reinforced.Lattice.Filters;
using Reinforced.Lattice.Filters.Range;
using Reinforced.Lattice.Filters.Select;
using Reinforced.Lattice.Filters.Value;
using Reinforced.Lattice.Mvc;
using Reinforced.Lattice.Plugins.Scrollbar;

namespace Reinforced.Lattice.CaseStudies.Filtering.Models
{
    public static class RangeFilterTable
    {
        public static Configurator<Contract, ContractRow> ConfigureRangeFilters(this Configurator<Contract, ContractRow> conf)
        {
            conf.Table();
            conf.Column(c => c.Id).DataOnly();

            // Simple server filtering
            conf.Column(c => c.Price).FilterRange(c => c.Price);

            // Filter delegate for tax filter
            conf.Column(c => c.Tax).FilterRange(c=>c.Tax).Value(ExtractTaxRange);

            // Date range filters
            conf.Column(c => c.StartDate).FilterRange(c => c.StartDate).CompareOnlyDates();
            conf.Column(c => c.EndDate).FilterRangeNoUi(c => c.StartDate).CompareOnlyDates();

            return conf;
        }

        private static Tuple<bool, RangeTuple<double?>> ExtractTaxRange(Query q)
        {
            if (!q.Filterings.ContainsKey("Tax")) return FilterTuple.None<RangeTuple<double?>>();
            var f = q.Filterings["Tax"];
            if (string.IsNullOrEmpty(f)) return FilterTuple.None<RangeTuple<double?>>();
            var spl = f.Split('|');
            var sFrom = spl[0];
            var sTo = spl[1];
            var from = string.IsNullOrEmpty(sFrom) ? (double?)null : double.Parse(sFrom);
            var to = string.IsNullOrEmpty(sTo) ? (double?)null : double.Parse(sTo);
            if (from.HasValue && from > 10) from = from / 100;
            if (to.HasValue && to > 10) to = to / 100;
            var rng = new RangeTuple<double?>
            {
                From = @from,
                HasFrom = @from.HasValue,
                To = to,
                HasTo = to.HasValue
            };
            return rng.ToFilterTuple();
        }
    }
}