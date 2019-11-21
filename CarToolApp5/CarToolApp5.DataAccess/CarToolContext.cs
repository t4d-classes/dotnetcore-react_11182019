using System;
using System.Collections.Generic;
using System.Text;
using Microsoft.EntityFrameworkCore;

namespace CarToolApp5.DataAccess
{
  public class CarToolContext: DbContext
  {
    public CarToolContext(DbContextOptions<CarToolContext> options)
      : base(options) { }

    public DbSet<Car> Cars { get; set; }
  }
}
