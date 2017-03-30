using System;

namespace Reinforced.Lattice.CaseStudies.Formwatcher.Models
{
    public class Contract
    {
        public int Id { get; set; }

        public string Title { get; set; }
        public string Supplier  { get; set; }

        public decimal Price { get; set; }
        public double? Tax { get; set; }

        public int Rating { get; set; }

        public Priority Priority { get; set; }

        public DateTime StartDate { get; set; }
        public DateTime? EndDate { get; set; }

        public Scope? Scope { get; set; }
    }

    public enum Priority
    {
        Minor,
        Low,
        Normal,
        High,
        Major,
        Critical
    }

    public enum Scope
    {
        Food,
        Technology,
        Equipment,
        Services,
        Finance,
        Management,
        Medication,
        Transportation,
        Construction
    }
}