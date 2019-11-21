using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

using CarDataModel = CarToolApp5.DataAccess.Car;
using CarModel = CarToolApp5.Models.Car;

namespace CarToolApp5.DataAccess
{
  public class CarsData
  {
    private CarToolContext _carToolContext;

    public CarsData(CarToolContext carToolContext)
    {
      _carToolContext = carToolContext;
    }

    public async Task<IEnumerable<CarModel>> All()
    {
      return await _carToolContext.Cars.Select(car => new CarModel()
        {
          Id = car.Id,
          Make = car.Make,
          Model = car.Model,
          Year = car.Year,
          Color = car.Color,
          Price = car.Price
        }).ToListAsync();
    }
  }
}
