using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Data;
using API.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
[ApiController]
    [Route ("api/[controller]")]
    public class SenariosController : ControllerBase
    {
        private readonly StoreContext _context;


        public SenariosController (StoreContext context)
        {
            _context = context;
        }


        [HttpGet]
        public async Task<ActionResult<List<Senario>>> GetSenarios()
        {
            var senarios = await _context.Senarios.ToListAsync();

            return senarios;
        }


/* [HttpGet("recommendations/{patientAge}/{patientSex}")]
public async Task<IActionResult> GetRecommendations(string patientAge, string patientSex)
{
    try
    {
        // Query the database to retrieve the Senario entity based on Patient_Age and Patient_Sex
        var senario = await _context.Senarios.FirstOrDefaultAsync(s =>
            s.Patient_Age == patientAge && s.Patient_Sex == patientSex);

        if (senario != null)
        {
            // If Senario entity is found, return the Recommendations value
            return Ok(senario.Recommendations);
        }
        else
        {
            // If Senario entity is not found, return an appropriate response
            return NotFound("Senario not found");
        }
    }
    catch (Exception ex)
    {
        // Handle any exceptions that occur during the operation
        return StatusCode(500, "An error occurred while retrieving Senario: " + ex.Message);
    }
}
 */

/*  [HttpGet("recommendations/{patientAge}/{patientSex}")]
public async Task<IActionResult> GetRecommendations(string patientAge, string patientSex)
{
    try
    {
        // Query the database to retrieve the list of Senario entities based on Patient_Age and Patient_Sex
        var senarios = await _context.Senarios.Where(s =>
            s.Patient_Age == patientAge && s.Patient_Sex == patientSex).ToListAsync();

        if (senarios != null && senarios.Count > 0)
        {
            // If Senario entities are found, return the list of Recommendations values
            var recommendationsList = senarios.Select(s => s.Recommendations).ToList();
            return Ok(recommendationsList);
        }
        else
        {
            // If Senario entities are not found, return an appropriate response
            return NotFound("Senarios not found");
        }
    }
    catch (Exception ex)
    {
        // Handle any exceptions that occur during the operation
        return StatusCode(500, "An error occurred while retrieving Senarios: " + ex.Message);
    }
}
 */

 [HttpGet("senario/{patientAge}/{patientSex}/{homeCode}/{areaCode}")]

public async Task<IActionResult> GetSenario(string patientAge, string patientSex, string homeCode, string areaCode)
{
    try
    {
        // Query the database to retrieve the list of Senario entities based on all provided criteria
        var senarios = await _context.Senarios.Where(s =>
            s.Patient_Age == patientAge && s.Patient_Sex == patientSex &&
            s.HomeCode == homeCode && s.AreaCode == areaCode).ToListAsync();

        if (senarios != null && senarios.Count > 0)
        {
            // If Senario entities are found, return the list of Senario entities
            return Ok(senarios);
        }
        else
        {
            // If Senario entities are not found, return an appropriate response
            return NotFound("Senarios not found");
        }
    }
    catch (Exception ex)
    {
        // Handle any exceptions that occur during the operation
        return StatusCode(500, "An error occurred while retrieving Senarios: " + ex.Message);
    }
}
    }

}