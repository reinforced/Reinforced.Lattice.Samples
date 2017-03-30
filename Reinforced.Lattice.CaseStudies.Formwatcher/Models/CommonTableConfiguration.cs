using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Reinforced.Lattice.CellTemplating;
using Reinforced.Lattice.Configuration;
using Reinforced.Lattice.Mvc;
using Reinforced.Lattice.Plugins.Loading;
using Reinforced.Lattice.Plugins.Scrollbar;

namespace Reinforced.Lattice.CaseStudies.Formwatcher.Models
{
    public static class CommonTableConfiguration
    {
        public static Configurator<Contract, ContractRow> Table(this Configurator<Contract, ContractRow> conf)
        {
            conf.AppendEmptyFilters().PrettifyTitles(true);
            conf.Scrollbar(c => c.Vertical());
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
            conf.Column(c => c.Tax).Title("Tax");
            conf.Column(c => c.Rating).TemplateFunction("formatRating");
            return conf;
        }
    }
}