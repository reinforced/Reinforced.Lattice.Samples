// Reference Reinforced.Lattice.Configuration
using Reinforced.Lattice.Configuration;

namespace Reinforced.Lattice.CaseStudies.GettingItWorking.Models
{
    // ViewModel for our index page
    public class HomeIndexViewModel
    {
        // Put Configurator<TSource,TRow> for your table here
        // In our case:
        //      - TSource = User class (usually - entity from DB)
        //      - TRow    = UserRow class (usually - ViewModel from our MVC app)
        public Configurator<User,UserRow> Table { get; set; }
    }
}