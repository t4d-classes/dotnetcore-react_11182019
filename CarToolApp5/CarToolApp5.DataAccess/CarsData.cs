using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.EntityFrameworkCore;

using CarDataModel = CarToolApp5.DataAccess.Car;
using CarModel = CarToolApp5.Models.Car;

namespace CarToolApp5.DataAccess
{
  public class CarsData
  {
    private CarToolContext _carToolContext;
    private IMapper _mapper;

    public CarsData(CarToolContext carToolContext)
    {
      _carToolContext = carToolContext;

      var config = new MapperConfiguration(cfg =>
        {
          cfg.CreateMap<CarDataModel, CarModel>().ReverseMap();
        });

      _mapper = config.CreateMapper();
    }

    public async Task<IEnumerable<CarModel>> All()
    {
      return await _carToolContext.Cars
        .Select(car => _mapper.Map<CarDataModel, CarModel>(car))
        .ToListAsync();
    }

    public async Task<CarModel> Append(CarModel car)
    {
      var carDataModel = _mapper.Map<CarModel, CarDataModel>(car);

      await _carToolContext.AddAsync(carDataModel);
      await _carToolContext.SaveChangesAsync();


      return _mapper.Map<CarDataModel, CarModel>(carDataModel);

    }
  }
}
