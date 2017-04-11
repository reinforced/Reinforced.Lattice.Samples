using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Reinforced.Lattice.Configuration;

namespace Reinforced.Lattice.CaseStudies.CoreTemplating.Models
{
    public class TodoListViewModel
    {
        public Configurator<TodoListEntry, TodoListEntry> Table { get; set; }
    }
}