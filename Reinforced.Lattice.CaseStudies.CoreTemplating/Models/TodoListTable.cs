using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Reinforced.Lattice.Configuration;

namespace Reinforced.Lattice.CaseStudies.CoreTemplating.Models
{
    public static class TodoListTable
    {
        public static Configurator<TodoListEntry, TodoListEntry> Todolist(this Configurator<TodoListEntry, TodoListEntry> conf)
        {
            conf.PrimaryKey(c => c.Id);
            return conf;
        }
    }
}