conf.ProjectDataWith(x =>
                x.Select(c => new UserRow() 
                {
                    Id = c.Id,
                    FullName = c.FirstName + " " + c.LastName,
                    Email = c.Email,
                    IsActive = c.IsActive,
                    ManagerId = c.Manager.Id,
                    ManagerName = c.Manager.FullName, 
                    RegistrationDate = c.RegistrationDate,

                    // EF will convert this to CROSS APPLY
                    TotalOrder = c.Orders.Sum(d => d.Quantity * d.Price)
                }
            ));