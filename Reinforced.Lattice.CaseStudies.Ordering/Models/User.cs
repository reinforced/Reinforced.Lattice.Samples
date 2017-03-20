using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Reinforced.Lattice.CaseStudies.Ordering.Models
{
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

    public enum UserType
    {
        Manager, Employee, Client, Admin
    }

}