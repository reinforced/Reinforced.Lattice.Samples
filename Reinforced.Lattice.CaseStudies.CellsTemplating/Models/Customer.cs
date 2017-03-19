using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Reinforced.Lattice.CaseStudies.CellsTemplating.Models
{
    // Our entity from Database
    public class Customer
    {
        public int Id { get; set; }
        public string UserPic { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
        public bool IsActive { get; set; }
        public int Rating { get; set; }
        public CustomerType Type { get; set; }
        public DateTime LastOrderDate { get; set; }
        public Gender? Gender { get; set; }
        public string Phone { get; set; }
        public PhoneType PhoneType { get; set; }
    }
    // Simple enumeration just for demonstration
    public enum CustomerType { B2b, B2c }

    public enum Gender { Male, Female }

    public enum PhoneType { Mobile, Standalone, Skype }

}