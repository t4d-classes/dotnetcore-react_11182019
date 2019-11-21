using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

using CarToolApp5.DataAccess;
using CarModel = CarToolApp5.Models.Car;


namespace CarToolApp5.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CarsController : ControllerBase
    {
      private CarsData _carsData;
      public CarsController(CarsData carsData)
      {
        _carsData = carsData;
      }

      [HttpGet()]
      public async Task<IEnumerable<CarModel>> All()
      {
        return await _carsData.All();
      }
    }
}