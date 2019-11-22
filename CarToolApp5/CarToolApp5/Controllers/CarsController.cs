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
      public async Task<IActionResult> All()
      {

        return Ok(await _carsData.All());
      }

      [HttpPost]
      public async Task<IActionResult> Append([FromBody] CarModel car)
      {
        if (!ModelState.IsValid)
        {
          return BadRequest();
        }

        return new ObjectResult(await _carsData.Append(car));
      }
    }
}