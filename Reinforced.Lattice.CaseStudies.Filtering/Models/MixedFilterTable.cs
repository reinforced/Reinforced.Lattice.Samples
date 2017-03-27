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
    public static class MixedFilterTable
    {
        public static Configurator<Contract, ContractRow> ConfigureMixedFilters(this Configurator<Contract, ContractRow> conf)
        {
            conf.Table();
            conf.Column(c => c.Id).DataOnly();

            // Simple server filtering
            conf.Column(c => c.Title).FilterValue(c => c.Title);

            // Server configuration in order to continue configure filter
            // in cshtml
            conf.Column(c => c.Supplier).FilterValueNoUi(c => c.Supplier);

            // Simple server filtering
            conf.Column(c => c.Price).FilterRange(c => c.Price);

            // Simple select filter
            conf.Column(c => c.Rating)
                .FilterSelect(c => c.Rating, ui => ui.SelectAny()
                    .SelectItems(new UiListItem[]
                    {
                        new UiListItem() { Text = "*", Value = "1"},
                        new UiListItem() { Text = "**", Value = "2"},
                        new UiListItem() { Text = "***", Value = "3"},
                        new UiListItem() { Text = "****", Value = "4"},
                        new UiListItem() { Text = "*****", Value = "5"},
                    })
                    .ClientFiltering() // with client filtering!
                    );

            // Select filter for enumeration with client filtering
            conf.Column(c => c.Scope)
                .FilterSelect(c => c.Scope,
                    ui => ui.SelectAny().SelectItems(EnumHelper.GetSelectList(typeof(Scope))).ClientFiltering());

            // Overriden value extractor
            conf.Column(c => c.Tax)
                .FilterValueBy((q, v) => q.Where(x => x.Tax > v))
                .Value(q =>
                {
                    if (!q.Filterings.ContainsKey("Tax")) return FilterTuple.None<double?>();
                    var f = q.Filterings["Tax"];
                    if (string.IsNullOrEmpty(f)) return FilterTuple.None<double?>();
                    var d = ValueConverter.Convert<double>(f);
                    if (d > 10) d = d / 100;
                    return ((double?)d).ToFilterTuple();
                });

            // Automatic datepickers demo
            conf.Column(c => c.StartDate).FilterRange(c => c.StartDate).CompareOnlyDates();

            conf.Column(c => c.EndDate).FilterValueNoUi(c => c.StartDate).CompareOnlyDates();

            return conf;
        }


    }
}