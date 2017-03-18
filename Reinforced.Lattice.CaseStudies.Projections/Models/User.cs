using System;
using System.Collections.Generic;

namespace Reinforced.Lattice.CaseStudies.Projections.Models
{
    public class User
    {
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
        public DateTime RegistrationDate { get; set; }
        public bool IsActive { get; set; }
        public List<Order> Orders { get; set; }
        public Manager Manager { get; set; }
    }

    public class Order
    {
        public int OderId { get; set; }
        public string Name { get; set; }
        public int Quantity { get; set; }
        public double Price { get; set; }
    }

    public class Manager
    {
        public int Id { get; set; }
        public string FullName { get; set; }
    }
}