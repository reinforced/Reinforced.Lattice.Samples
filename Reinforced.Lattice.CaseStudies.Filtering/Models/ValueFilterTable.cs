using System.Linq;
using Reinforced.Lattice.CellTemplating;
using Reinforced.Lattice.Configuration;
using Reinforced.Lattice.Filters;
using Reinforced.Lattice.Filters.Multi;
using Reinforced.Lattice.Filters.Range;
using Reinforced.Lattice.Filters.Value;
using Reinforced.Lattice.Mvc;
using Reinforced.Lattice.Plugins.Scrollbar;

namespace Reinforced.Lattice.CaseStudies.Filtering.Models
{
    public static class ValueFilterTable
    {
        public static Configurator<Contract, ContractRow> ConfigureValueFilters(this Configurator<Contract, ContractRow> conf)
        {
            conf.Table();
            conf.Column(c => c.Id).DataOnly();

            // Simple server filtering
            conf.Column(c => c.Title).FilterValue(c => c.Title);

            // Server configuration in order to continue configure filter
            // in cshtml
            conf.Column(c => c.Supplier).FilterValueNoUi(c => c.Supplier);

            // Value filter overriden by filtering delegate
            conf.Column(c => c.Price).FilterValueNoUi(c => c.Price)
                .By((q, v) => q.Where(x => x.Price < v));

            // Exactly the same as above
            conf.Column(c => c.Price).FilterValueNoUiBy((q, v) => q.Where(x => x.Price < v));

            // Overriden value extractor
            conf.Column(c => c.Tax)
                .FilterValueBy((q, v) => q.Where(x => x.Tax > v))
                .Value(q =>
                {
                    if (!q.Filterings.ContainsKey("Tax")) return FilterTuple.None<double?>();
                    var f = q.Filterings["Tax"];
                    if (string.IsNullOrEmpty(f)) return FilterTuple.None<double?>();
                    var d = double.Parse(f);
                    if (d > 10) d = d / 100;
                    return ((double?)d).ToFilterTuple();
                });

            // Automatic datepickers demo
            conf.Column(c => c.StartDate).FilterValue(c => c.StartDate).CompareOnlyDates();
            conf.Column(c => c.EndDate).FilterValueNoUi(c => c.StartDate).CompareOnlyDates();

            return conf;
        }


    }
}