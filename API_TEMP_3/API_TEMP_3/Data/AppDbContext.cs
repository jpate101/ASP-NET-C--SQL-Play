using API_TEMP_3.Models;
using Microsoft.EntityFrameworkCore;

namespace API_TEMP_3.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) {}
        public DbSet<Product> Products { get; set; }
    }
}
