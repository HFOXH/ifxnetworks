using backend.Context;
using backend.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Data;

namespace backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EntityController : Controller
    {
        private readonly ApplicationDbContext _context;

        public EntityController(ApplicationDbContext context) { _context = context;  }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Entity>>> GetEntities() {
            var entities = await _context.Entities.ToListAsync();
            if (entities == null || entities.Count == 0) {
                return NotFound();
            }
            return Ok(entities);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Entity>> GetEntity(Guid id) {
            var entity = await _context.Entities.FirstOrDefaultAsync(e => e.EntityId == id);
            if (entity == null) {
                return NotFound();
            }
            return Ok(entity);
        }

        [HttpPost]
        [Authorize(Roles = "Administrator")]
        public async Task<ActionResult<Entity>> PostEntity([FromBody] Entity entity)
        {
            if (entity == null)
            {
                return BadRequest("Entity data is required.");
            }

            _context.Entities.Add(entity);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetEntity), new { id = entity.EntityId }, entity);
        }

        [HttpPut("{id}")]
        [Authorize(Roles = "Administrator")]
        public async Task<IActionResult> PutEntity(Guid id, [FromBody] Entity updatedEntity)
        {
            if (updatedEntity == null)
            {
                return BadRequest("Entity data is required.");
            }

            var existingEntity = await _context.Entities.FindAsync(id);

            if (existingEntity == null)
            {
                return NotFound();
            }

            existingEntity.EntityName = updatedEntity.EntityName;
            existingEntity.Description = updatedEntity.Description;

            await _context.SaveChangesAsync();

            return NoContent();
        }

        [HttpDelete("{id}")]
        [Authorize(Roles = "Administrator")]
        public async Task<ActionResult<Entity>> DeleteEntity(Guid id) {
            var entity = await _context.Entities.FirstOrDefaultAsync(e => e.EntityId == id);
            if (entity == null) { 
                return NotFound(); 
            }
            _context.Entities.Remove(entity);
            await _context.SaveChangesAsync();
            return NoContent();
        }

    }
}
