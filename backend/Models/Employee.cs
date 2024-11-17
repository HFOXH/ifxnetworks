using System.ComponentModel.DataAnnotations;

namespace backend.Models
{
    public class Employee
    {
        public Guid EmployeeId { get; set; } = Guid.NewGuid();

        [Required]
        [MaxLength(100)]
        public string FirstName { get; set; }

        [Required]
        [MaxLength(100)]
        public string LastName { get; set; }

        [Required]
        public DateTime DateOfBirth { get; set; }

        [Required]
        [MaxLength(100)]
        public string JobTitle { get; set; }

        // Foreign key to Entity
        public Guid EntityId { get; set; }
    }
}
