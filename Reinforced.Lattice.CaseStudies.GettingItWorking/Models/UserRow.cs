using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace Reinforced.Lattice.CaseStudies.GettingItWorking.Models
{
    // Our ViewModel for table row
    // Referenced in documentation as TRow
    public class UserRow
    {
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }

        // Yes, Display Attribute also changes column title
        [Display(Name = "E-mail")]      
        public string Email { get; set; }

        public DateTime RegistrationDate { get; set; }
        public bool IsActive { get; set; }
        public UserType UserType { get; set; }
    }
}