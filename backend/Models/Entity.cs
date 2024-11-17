using System.ComponentModel.DataAnnotations;

namespace backend.Models
{
    public class Entity
    {
        public Guid EntityId { get; set; } = Guid.NewGuid();

        [Required]
        [MaxLength(100)]
        public string EntityName { get; set; }

        [MaxLength(255)]
        public string Description { get; set; }
    }
}
