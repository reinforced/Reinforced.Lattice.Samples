using System.Linq;
using System.Web.Mvc.Html;
using Reinforced.Lattice.CellTemplating;
using Reinforced.Lattice.Configuration;
using Reinforced.Lattice.Filters;
using Reinforced.Lattice.Filters.Multi;
using Reinforced.Lattice.Filters.Select;
using Reinforced.Lattice.Filters.Value;
using Reinforced.Lattice.Mvc;
using Reinforced.Lattice.Plugins.Scrollbar;

namespace Reinforced.Lattice.CaseStudies.Filtering.Models
{
    public static class MultiSelectFilterTable
    {
        public static Configurator<Contract, ContractRow> ConfigureMultiSelectFilters(this Configurator<Contract, ContractRow> conf)
        {
            conf.Table();
            conf.Column(c => c.Id).DataOnly();

            // Simple select filter
            conf.Column(c => c.Rating)
                .FilterMultiSelect(c => c.Rating, ui => ui.SelectAny()
                    .SelectItems(new UiListItem[]
                    {
                        new UiListItem() { Text = "*", Value = "1"},
                        new UiListItem() { Text = "**", Value = "2"},
                        new UiListItem() { Text = "***", Value = "3"},
                        new UiListItem() { Text = "****", Value = "4"},
                        new UiListItem() { Text = "*****", Value = "5"},
                    }));

            // Select filter for enumeration with client filtering
            conf.Column(c => c.Scope)
                .FilterMultiSelect(c => c.Scope,
                    ui => ui.SelectAny().SelectItems(EnumHelper.GetSelectList(typeof(Scope))).ClientFiltering());

            // Value filter by specified price ranges
            conf.Column(c => c.Price)
                .FilterMultiSelectNoUiBy((q, v) =>
                {
                    if (!v.Any()) return q;
                    var _5_15 = v.Contains(0);
                    var _15_25 = v.Contains(1);
                    var _25_35 = v.Contains(2);
                    var _35_40 = v.Contains(3);
                    var _40_50 = v.Contains(4);

                    return q.Where(c=>
                    (_5_15 && (c.Price>5000 && c.Price < 15000))
                    || (_15_25 && (c.Price >= 15000 && c.Price <= 25000))
                    || (_25_35 && (c.Price >= 25000 && c.Price <= 35000))
                    || (_35_40 && (c.Price >= 35000 && c.Price <= 40000))
                    || (_40_50 && (c.Price >= 40000 && c.Price <= 50000))
                    );
                });

            return conf;
        }


    }
}