using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Reinforced.Lattice.CaseStudies.CoreTemplating.Models
{
    public class TodoListEntry
    {
        public Guid Id { get; set; }
        public string Text { get; set; }
        public TodoIcon Icon { get; set; }
        public DateTime Date { get; set; }
    }

    public class TodoListEntryCreateEditViewModel
    {
        public Guid? Id { get; set; }
        public string Text { get; set; }
        public TodoIcon Icon { get; set; }
    }

    public enum TodoIcon
    {
        Heart,
        Star,
        Film,
        Cog,
        Thumbs_up,
        List,
        Fire,
        Flash,
        Phone
    }
}