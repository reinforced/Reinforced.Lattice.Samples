using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;

namespace Reinforced.Lattice.CaseStudies.GettingItWorking.Data
{
    public class DataService<T>
    {
        private List<T> _objects;

        public IQueryable<T> GetAllData()
        {
            return _objects.AsQueryable();
        }

        public void SetData(IList data)
        {
            if (data == null) return;
            _objects = (List<T>) data;
        }
    }
}