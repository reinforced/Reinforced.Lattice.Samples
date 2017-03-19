// Reference Reinforced.Lattice.Configuration here

using Reinforced.Lattice.CellTemplating;
using Reinforced.Lattice.Configuration;
using Reinforced.Lattice.Plugins.Limit;
using Reinforced.Lattice.Plugins.Loading;

namespace Reinforced.Lattice.CaseStudies.Partition.Models
{
    public static class ProductsTable
    {
        // we have moved limiting, loading indicator and templating configuration to separate mixin
        // just to avoid code duplication
        public static Configurator<Product, Product> Common(this Configurator<Product, Product> conf)
        {
            conf.PrettifyTitles(firstCapitals: true);
            conf.Column(c => c.Id).DataOnly();
            conf.Column(c => c.RecentSaleDate).Title("Last order").Format("`moment({@}).fromNow()`");
            conf.Column(c => c.Rating).TemplateFunction("formatRating");
            conf.LoadingIndicator(where: "lt");
            conf.Limit(ui => ui.Values(new[] { "All", "-", "10", "20", "50", "100" }), where: "lt");
            return conf;
        }

        public static Configurator<Product, Product> ConfigureClientPartition(this Configurator<Product, Product> conf)
        {
            conf.Common().Partition(x => x.Client().InitialSkipTake(take: 10));
            return conf;
        }

        public static Configurator<Product, Product> ConfigureServerPartition(this Configurator<Product, Product> conf)
        {
            conf.Common().Partition(x => x.Server().InitialSkipTake(take: 10));
            return conf;
        }

        public static Configurator<Product, Product> ConfigureSequentialPartition(this Configurator<Product, Product> conf)
        {
            conf.Common().Partition(x => x.Sequential(loadPagesAhead: 3).InitialSkipTake(take: 10));
            return conf;
        }
    }
}