using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Reinforced.Lattice.CaseStudies.GettingItWorking.Models
{
    // Our entity from Database
    public class User
    {
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
        public DateTime RegistrationDate { get; set; }
        public bool IsActive { get; set; }
        public UserType UserType { get; set; }
    }

    // Simple enumeration just for demonstration
    public enum UserType
    {
        Admin, Manager, Employee, Client
    }

}