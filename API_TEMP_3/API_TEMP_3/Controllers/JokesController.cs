using API_TEMP_3.Data;
using API_TEMP_3.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Linq;
using System.Threading.Tasks;

namespace API_TEMP_3.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class JokesController : ControllerBase
    {
        private readonly AppDbContext _appDbContext;

        public JokesController(AppDbContext appDbContext)
        {
            _appDbContext = appDbContext;
        }

        [HttpPost]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status500InternalServerError)]
        public async Task<IActionResult> AddJoke(Joke joke)
        {
            try
            {
                _appDbContext.Jokes.Add(joke);
                await _appDbContext.SaveChangesAsync();

                return Ok(joke);
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, $"Error: {ex.Message}");
            }
        }

        [HttpGet("random")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        [ProducesResponseType(StatusCodes.Status500InternalServerError)]
        public IActionResult GetRandomJoke()
        {
            try
            {
                var totalJokesCount = _appDbContext.Jokes.Count();

                if (totalJokesCount == 0)
                {
                    return NotFound("No jokes available in the database.");
                }

                var random = new Random();
                var randomIndex = random.Next(0, totalJokesCount);

                var randomJoke = _appDbContext.Jokes.Skip(randomIndex).FirstOrDefault();

                return Ok(randomJoke);
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, $"Error: {ex.Message}");
            }
        }
    }
}
