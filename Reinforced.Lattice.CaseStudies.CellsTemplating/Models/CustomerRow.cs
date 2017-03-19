using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace Reinforced.Lattice.CaseStudies.CellsTemplating.Models
{
    public class CustomerRow
    {
        public int Id { get; set; }
        public string UserPic { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Country { get; set; }
        public string Email { get; set; }
        public bool IsActive { get; set; }
        public int Rating { get; set; }
        public CustomerType Type { get; set; }
        public DateTime LastOrderDate { get; set; }
        public Gender? Gender { get; set; }
    }
}