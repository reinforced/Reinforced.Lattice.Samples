using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Reinforced.Lattice.CaseStudies.CoreTemplating.Models
{
    public class IkeaChair
    {
        public string Id { get; set; }
        public string PictureUrl { get; set; }
        public string Name { get; set; }
        public string Link { get; set; }
        public string Description { get; set; }
        public bool IsSpecialPrice { get; set; }
        public decimal Price { get; set; }
        public string Size { get; set; }
        public List<ChairColor> Colors { get; set; }
        public bool IsByableOnline { get; set; }
        public Category Category { get; set; }
    }

    public enum ChairColor
    {
        Black,
        Blue,
        Brown,
        Gray,
        Green,
        Other,
        Red,
        White,
        Yellow
    }

    public enum Category
    {
        ChairCovers,
        DiningChairs,
        UnderframesAndShells,
        FoldableChairs,
        UpholsteredChairs
    }

    public class IkeaChairRow
    {
        public string Id { get; set; }
        public string PictureUrl { get; set; }
        public string Name { get; set; }
        public string Link { get; set; }
        public string Description { get; set; }
        public bool IsSpecialPrice { get; set; }
        public decimal Price { get; set; }
        public string Size { get; set; }
        public string Colors { get; set; }
        public bool IsByableOnline { get; set; }
        public Category Category { get; set; }
    }
}