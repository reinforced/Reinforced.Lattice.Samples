using System;
using System.ComponentModel.DataAnnotations;

namespace Reinforced.Lattice.CaseStudies.ColumnsOperations.Models
{
    // Our ViewModel for table row
    // Referenced in documentation as TRow
    public class UserRow
    {
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
        public DateTime RegistrationDate { get; set; }
        public bool IsActive { get; set; }
        public UserType UserType { get; set; }

        public object DummyData { get; set; }
    }
}