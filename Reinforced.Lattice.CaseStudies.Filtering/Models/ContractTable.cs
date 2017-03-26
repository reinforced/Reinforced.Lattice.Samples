using System.Linq;
using Reinforced.Lattice.CellTemplating;
using Reinforced.Lattice.Configuration;
using Reinforced.Lattice.Filters;
using Reinforced.Lattice.Filters.Value;
using Reinforced.Lattice.Mvc;
using Reinforced.Lattice.Plugins.Scrollbar;

namespace Reinforced.Lattice.CaseStudies.Filtering.Models
{
    public static class ContractTable
    {
        public static Configurator<Contract, ContractRow> Table(this Configurator<Contract, ContractRow> conf)
        {
            conf.AppendEmptyFilters().PrettifyTitles(true);
            conf.Partition(c => c.InitialSkipTake(take: 10));
            conf.Column(c => c.Id).DataOnly();
            conf.DatePicker(new DatepickerOptions(
                "ltcCreateDatePicker",
                "ltcPutDateToDatepicker",
                "ltcGetDateFromDatepicker",
                "ltcDestroyDatepicker"
            ));
            conf.Column(c => c.StartDate).Format("`moment({@}).format('DD MMM YYYY');`");
            conf.Column(c => c.EndDate)
                .Template(x =>
                {
                    x.IfNotPresent("{@}", "<i>No date</i>");
                    x.Returns("`moment({@}).format('DD MMM YYYY');`");
                });
            conf.Column(c => c.Tax).Template(x =>
            {
                x.IfNotPresent("{@}", "No tax");
                x.Returns("`({@}*{Price}).toFixed(2)` ({@})");
            });
            conf.Column(c => c.Priority).FormatEnum();
            conf.Column(c => c.Scope).FormatEnum();
            conf.PrettifyTitles(true);
            conf.Partition(c => c.InitialSkipTake(take: 20));
            conf.Scrollbar(c => c.Vertical());
            conf.Column(c => c.Tax).Title("Tax");
            conf.Column(c => c.Rating).TemplateFunction("formatRating");
            return conf;
        }

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