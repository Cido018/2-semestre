using Microsoft.EntityFrameworkCore;
using EX02.Models;

namespace EX02.Context
{
    public class AppDbContext : DbContext{
        public AppDbContext (DbContextOptions<AppDbContext> options) : base(options)
        {
        }

        public DbSet<Pais> Paises { get; set; }
        public DbSet<Continente> Continentes { get; set;}
    }
}