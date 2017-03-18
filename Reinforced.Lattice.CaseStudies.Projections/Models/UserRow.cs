using System;
using System.ComponentModel.DataAnnotations;

namespace Reinforced.Lattice.CaseStudies.Projections.Models
{
    public class UserRow
    {
        public int Id { get; set; }
        public string FullName { get; set; }
        [Display(Name = "E-mail")]      
        public string Email { get; set; }
        public DateTime RegistrationDate { get; set; }
        public bool IsActive { get; set; }
        public int ManagerId { get; set; }
        public string ManagerName { get; set; }
        public double TotalOrder { get; set; }
    }
}