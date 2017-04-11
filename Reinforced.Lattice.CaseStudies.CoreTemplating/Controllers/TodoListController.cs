using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Reinforced.Lattice.Adjustments;
using Reinforced.Lattice.CaseStudies.CoreTemplating.Data;
using Reinforced.Lattice.CaseStudies.CoreTemplating.Models;
using Reinforced.Lattice.Commands;
using Reinforced.Lattice.Configuration;
using Reinforced.Lattice.Mvc;
using Reinforced.Lattice.Processing;

namespace Reinforced.Lattice.CaseStudies.CoreTemplating.Controllers
{
    public class TodoListController : Controller
    {

        public ActionResult Index()
        {
            return View(GenerateViewModel());
        }

        public TodoListViewModel GenerateViewModel()
        {
            return new TodoListViewModel()
            {
                Table = new Configurator<TodoListEntry, TodoListEntry>()
                    .Todolist()
                    .Url(Url.Action("HandleTable"))
            };
        }

        private List<TodoListEntry> GetData()
        {
            if (Session["TodoData"] == null)
            {
                Session["TodoData"] = ToDoListData.TestEntries().ToList();
            }

            return (List<TodoListEntry>)Session["TodoData"];
        }

        public ActionResult HandleTable()
        {
            var conf = new Configurator<TodoListEntry, TodoListEntry>().Todolist();
            var handler = conf.CreateMvcHandler(ControllerContext);
            var data = GetData();
            handler.AddCommandHandler("Complete", Complete);
            handler.AddCommandHandler("EditOrCreate", EditOrCreate);
            return handler.Handle(data.AsQueryable().OrderByDescending(c => c.Date));
        }

        private TableAdjustment Complete(LatticeData<TodoListEntry, TodoListEntry> latticeData)
        {
            try
            {
                var data = GetData();
                var subj = latticeData.CommandSubject();
                var entry = data.FirstOrDefault(c => c.Id == subj.Id);
                data.Remove(entry);
                var msg = string.Format("'{0}' task successfulyl completed", entry.Text);

                return latticeData.Adjust(x => x.RemoveExact(entry)
                    .Message(LatticeMessage.User("success", "Completed", msg)));
            }
            catch (Exception e)
            {
                return latticeData.Adjust(x => x
                    .Message(LatticeMessage.User("error", "Error", e.Message)));
            }
        }

        private TableAdjustment EditOrCreate(LatticeData<TodoListEntry, TodoListEntry> latticeData)
        {
            var data = GetData();
            var confirmation = latticeData.CommandConfirmation<TodoListEntryCreateEditViewModel>();
            TodoListEntry entry = null;
            if (confirmation.Id == null)
            {
                entry = new TodoListEntry()
                {
                    Date = DateTime.Now,
                    Icon = confirmation.Icon,
                    Id = Guid.NewGuid(),
                    Text = confirmation.Text
                };

                data.Add(entry);
                return latticeData.Adjust(x => x
                    .UpdateSource(entry)
                    .Message(LatticeMessage.User("success", "Created", "New ToDo entry created")));
            }

            entry = data.FirstOrDefault(c => c.Id == confirmation.Id);
            entry.Date = DateTime.Now;
            entry.Text = confirmation.Text;
            entry.Icon = confirmation.Icon;
            return latticeData.Adjust(x => x
                .UpdateSource(entry)
                .Message(LatticeMessage.User("success", "Updated", "ToDo entry updated")));
        }

        public DataService<Contract> DataService { get; private set; }

        public TodoListController()
        {
            DataService = new DataService<Contract>();
            DataService.SetData(MvcApplication.Data);
        }
    }
}