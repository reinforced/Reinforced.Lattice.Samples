using System.Linq;
using System.Web.Mvc.Html;
using Reinforced.Lattice.CellTemplating;
using Reinforced.Lattice.Configuration;
using Reinforced.Lattice.Filters;
using Reinforced.Lattice.Filters.Select;
using Reinforced.Lattice.Filters.Value;
using Reinforced.Lattice.Mvc;
using Reinforced.Lattice.Plugins.Scrollbar;

namespace Reinforced.Lattice.CaseStudies.Filtering.Models
{
    public static class SelectFilterTable
    {
        public static Configurator<Contract, ContractRow> ConfigureSelectFilters(this Configurator<Contract, ContractRow> conf)
        {
            conf.Table();
            conf.Column(c => c.Id).DataOnly();

            // Simple select filter with default value selected
            conf.Column(c => c.Rating)
                .FilterSelect(c => c.Rating, ui => ui.SelectAny()
                    .SelectItems(new UiListItem[]
                    {
                        new UiListItem() { Text = "*", Value = "1"},
                        new UiListItem() { Text = "**", Value = "2"},
                        new UiListItem() { Text = "***", Value = "3"},
                        new UiListItem() { Text = "****", Value = "4"},
                        new UiListItem() { Text = "*****", Value = "5"},
                    }).SelectDefault(4));

            // Select filter for enumeration with client filtering
            conf.Column(c => c.Scope)
                .FilterSelect(c => c.Scope,
                    ui => ui.SelectAny().SelectItems(EnumHelper.GetSelectList(typeof(Scope))).ClientFiltering());

            // Value filter by specified price ranges
            conf.Column(c => c.Price).FilterValueNoUiBy((q, v) =>
                v == 0 ? q.Where(x => x.Price > 5000 && x.Price < 15000) :
                v == 1 ? q.Where(x => x.Price > 15000 && x.Price < 25000) :
                v == 2 ? q.Where(x => x.Price > 25000 && x.Price < 35000) :
                v == 3 ? q.Where(x => x.Price > 35000 && x.Price < 40000) :
                v == 4 ? q.Where(x => x.Price > 40000 && x.Price < 50000) : q
            );

            return conf;
        }


    }
}