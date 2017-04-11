using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Reinforced.Lattice.CaseStudies.CoreTemplating.Models
{
    public static class ToDoListData
    {
        public static IEnumerable<TodoListEntry> TestEntries()
        {
            yield return new TodoListEntry()
            {
                Date = DateTime.Now.AddDays(-5),
                Icon = TodoIcon.List,
                Id = Guid.NewGuid(),
                Text = "Get fresh food from the METRO store"
            };
            yield return new TodoListEntry()
            {
                Date = DateTime.Now.AddDays(-4),
                Icon = TodoIcon.Phone,
                Id = Guid.NewGuid(),
                Text = "Call to customers about plush bears suppliement"
            };
            yield return new TodoListEntry()
            {
                Date = DateTime.Now.AddDays(-4).AddHours(-2),
                Icon = TodoIcon.Star,
                Id = Guid.NewGuid(),
                Text = "Remind management about self-propagation"
            };
            yield return new TodoListEntry()
            {
                Date = DateTime.Now.AddDays(-3),
                Icon = TodoIcon.Cog,
                Id = Guid.NewGuid(),
                Text = "Website maintenance"
            };
            yield return new TodoListEntry()
            {
                Date = DateTime.Now.AddDays(-2).AddHours(-3),
                Icon = TodoIcon.Fire,
                Id = Guid.NewGuid(),
                Text = "Contribute to diploma work"
            };
            yield return new TodoListEntry()
            {
                Date = DateTime.Now.AddDays(-2).AddHours(-2),
                Icon = TodoIcon.Thumbs_up,
                Id = Guid.NewGuid(),
                Text = "Classmates annual meetup"
            };
            yield return new TodoListEntry()
            {
                Date = DateTime.Now.AddDays(-1).AddHours(-5),
                Icon = TodoIcon.Heart,
                Id = Guid.NewGuid(),
                Text = "Date with Claire"
            };
            yield return new TodoListEntry()
            {
                Date = DateTime.Now.AddDays(-1).AddHours(-3),
                Icon = TodoIcon.Flash,
                Id = Guid.NewGuid(),
                Text = "Replace batteries in laptop"
            };
            yield return new TodoListEntry()
            {
                Date = DateTime.Now.AddHours(-4),
                Icon = TodoIcon.Film,
                Id = Guid.NewGuid(),
                Text = "Watch new Silicon Valley episode"
            };
        }
    }
}