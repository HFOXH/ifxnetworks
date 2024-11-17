import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CrudService } from '../../service/crud.service';
import { CommonModule } from '@angular/common';
import { Employee } from '../../service/models/employee';
import { ActivatedRoute, Router } from '@angular/router';
import { Entity } from '../../service/models/entity';

@Component({
  selector: 'app-edit-employee',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './edit-employee.component.html',
  styleUrl: './edit-employee.component.css'
})
export class EditEmployeeComponent implements OnInit {
  employeeForm!: FormGroup;
  employeeId!: string;
  entities: Entity[] = [];

  constructor(
    private fb: FormBuilder,
    private crudService: CrudService,
    private route: ActivatedRoute,
    private router: Router 
  ) {}

  ngOnInit(): void {
    this.employeeId = this.route.snapshot.paramMap.get('id')!;

    this.employeeForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      dateOfBirth: ['', Validators.required],
      jobTitle: ['', Validators.required],
      entityId: ['', Validators.required]
    });

    this.loadEmployeeData();
    this.loadEntities();
  }

  loadEmployeeData(): void {
    this.crudService.getEmployeeById(this.employeeId).subscribe(
      (employee: Employee) => {
        const formattedDateOfBirth = this.formatDateForInput(employee.dateOfBirth);
        this.employeeForm.patchValue({
          firstName: employee.firstName,
          lastName: employee.lastName,
          dateOfBirth: formattedDateOfBirth,
          jobTitle: employee.jobTitle,
          entityId: employee.entityId
        });
      },
      (error) => {
        console.error('Error fetching employee data:', error);
      }
    );
  }

  editEmployee(): void {
    if (this.employeeForm.valid) {
      const updatedEmployee: Employee = this.employeeForm.value;
      this.crudService.updateEmployee(this.employeeId, updatedEmployee).subscribe(
        (data: Employee) => {
          console.log('Employee updated successfully:', data);
          this.router.navigate(['/employees']);
        },
        (error) => {
          console.error('Error updating employee:', error);
        }
      );
    }
  }

  loadEntities(): void {
    this.crudService.getEntities().subscribe(
      (data: Entity[]) => {
        this.entities = data;
      },
      (error) => {
        console.error('Error fetching entities:', error);
      }
    );
  }

  formatDateForInput(date: string): string {
    const formattedDate = new Date(date);
    const day = String(formattedDate.getDate()).padStart(2, '0');
    const month = String(formattedDate.getMonth() + 1).padStart(2, '0');
    const year = formattedDate.getFullYear();
    return `${year}-${month}-${day}`;
  }
}