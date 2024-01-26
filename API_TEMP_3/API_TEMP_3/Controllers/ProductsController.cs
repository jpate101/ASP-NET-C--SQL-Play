using API_TEMP_3.Data;
using API_TEMP_3.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace API_TEMP_3.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductsController : ControllerBase
    {

        private readonly AppDbContext _appDbContext;
        public ProductsController(AppDbContext appDbContext) { 
            _appDbContext = appDbContext;
        }

        [HttpPost]
        public IActionResult AddProduct(Product product)
        {
            _appDbContext.Products.Add(product);
            _appDbContext.SaveChangesAsync();

            return Ok(product);

        }
        [HttpGet]
        public IActionResult GetProducts()
        {
            var products = _appDbContext.Products.ToList();
            return Ok(products);
        }
    }
}
