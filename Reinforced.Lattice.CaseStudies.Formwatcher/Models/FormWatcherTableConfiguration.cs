using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Reinforced.Lattice.Configuration;
using Reinforced.Lattice.Filters;
using Reinforced.Lattice.Filters.Range;
using Reinforced.Lattice.Filters.Value;
using Reinforced.Lattice.Plugins.Formwatch;

namespace Reinforced.Lattice.CaseStudies.Formwatcher.Models
{
    public static class FormWatcherTableConfiguration
    {
        public static Configurator<Contract, ContractRow> ConfigureFormWatcher(
            this Configurator<Contract, ContractRow> conf)
        {
            conf.Table();
            conf.Column(c => c.StartDate)
                .FilterRange(c => c.StartDate, c => c.ClientFiltering().HideFilter());
            conf.Column(c => c.Supplier)
                .FilterValue(c => c.Supplier, x => x.ClientFiltering().HideFilter());

            conf.WatchForm<WatchedFormViewModel>(w =>
            {
                w.WatchAllFields();
                w.Field(x => x.Supplier).TriggerSearchOnEvents(10, "keyup").DoNotEmbedToQuery();
                w.Field(x => x.Ratings).Delimiter(",");
                w.Field(x => x.PriceRanges).Selector("input[name='chb_Price']");
                w.Field(x => x.StartDateFrom).AutoDatePicker();
                w.Field(x => x.StartDateTo).AutoDatePicker();
                w.Field(x => x.FormTimeStamp).Constant(DateTime.Now);

                w.FilterColumn(conf, x => x.StartDate).FilterRange(x => x.StartDateFrom, x => x.StartDateTo).ClientServer(server: false);
                w.FilterColumn(conf, x => x.Supplier).FilterValue(x => x.Supplier).ClientServer(server: false);
            });

            

            conf.FreeOrdering(q =>
                q.Form<WatchedFormViewModel>().Ordering == OrderingPreset.ByNames
                    ? Ordering.Ascending.ToFilterTuple()
                    : FilterTuple.None<Ordering>(),
                x => x.Title);

            conf.FreeOrdering(q =>
                    q.Form<WatchedFormViewModel>().Ordering == OrderingPreset.ByPrices
                        ? Ordering.Descending.ToFilterTuple()
                        : FilterTuple.None<Ordering>(),
                x => x.Price);

            conf.FreeFilter(q =>
                    q.Form<WatchedFormViewModel>().Ordering.ToFilterTuple(x => x == OrderingPreset.ByScopeRating),
                (x, v) => x.OrderByDescending(c => c.Rating).ThenByDescending(c => c.Scope));

            conf.FreeFilter(q => q.Form<WatchedFormViewModel>().Title.TupleIfNotNull(), (q, v) => q.Where(x => x.Title.Contains(v)));

            conf.FreeFilter(
                q => q.Form<WatchedFormViewModel>().Ratings.TupleIfNotNull(x => x.Length > 0),
                (q, v) => q.Where(x => v.Contains(x.Rating))
            );

            conf.FreeFilter(q => q.Form<WatchedFormViewModel>().EndYear.TupleIfNotNull(),
                (q, v) => v == -1 ? q.Where(c => c.EndDate == null) : q.Where(x => x.EndDate != null && x.EndDate.Value.Year == v));

            conf.FreeFilter(q => q.Form<WatchedFormViewModel>().Priorities.TupleIfNotNull(x => x.Length > 0),
                (q, v) => q.Where(x => v.Contains(x.Priority) || x.Priority == Priority.Critical));

            conf.FreeFilter(q => q.Form<WatchedFormViewModel>().TupleIfNotNull(), FilterTax);
            conf.FreeFilter(q => q.Form<WatchedFormViewModel>().PriceRanges.TupleIfNotNull(c => c.Length > 0), FilterPrices);
            return conf;
        }

        private static IQueryable<Contract> FilterTax(IQueryable<Contract> q, WatchedFormViewModel vm)
        {
            if (vm.NoTax) return q.Where(c => c.Tax == null);
            if (vm.TaxFrom.HasValue && vm.TaxFrom >= 10) vm.TaxFrom = vm.TaxFrom.Value / 100;
            if (vm.TaxTo.HasValue && vm.TaxTo >= 10) vm.TaxTo = vm.TaxTo.Value / 100;

            if (vm.TaxFrom.HasValue && vm.TaxTo.HasValue)
            {
                return q.Where(x => x.Tax >= vm.TaxFrom && x.Tax <= vm.TaxTo);
            }

            if (vm.TaxFrom.HasValue)
            {
                return q.Where(x => x.Tax >= vm.TaxFrom);
            }

            if (vm.TaxTo.HasValue)
            {
                return q.Where(x => x.Tax <= vm.TaxTo);
            }

            return q;
        }

        private static IQueryable<Contract> FilterPrices(IQueryable<Contract> q, PriceRange[] v)
        {
            var _5_15 = v.Contains(PriceRange.From5_15);
            var _15_25 = v.Contains(PriceRange.From15_25);
            var _25_35 = v.Contains(PriceRange.From25_35);
            var _35_40 = v.Contains(PriceRange.From35_40);
            var _40_50 = v.Contains(PriceRange.From40_50);

            return q.Where(c =>
                (_5_15 && (c.Price > 5000 && c.Price < 15000))
                || (_15_25 && (c.Price >= 15000 && c.Price <= 25000))
                || (_25_35 && (c.Price >= 25000 && c.Price <= 35000))
                || (_35_40 && (c.Price >= 35000 && c.Price <= 40000))
                || (_40_50 && (c.Price >= 40000 && c.Price <= 50000))
            );
        }

    }
}