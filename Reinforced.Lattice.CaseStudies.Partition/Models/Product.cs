using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Reinforced.Lattice.CaseStudies.Partition.Models
{
    public class Product
    {
        public int Id { get; set; }
        public string ProductName { get; set; }
        public string Manufacturer { get; set; }
        public int Quantity { get; set; }
        public string WarehouseLocation { get; set; }
        public DateTime RecentSaleDate { get; set; }
        public int Rating { get; set; }
    }
}