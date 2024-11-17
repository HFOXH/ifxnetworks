import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CrudService } from '../../service/crud.service';
import { Employee } from '../../service/models/employee';
import { CommonModule } from '@angular/common';
import { Entity } from '../../service/models/entity';

@Component({
  selector: 'app-add-employee',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './add-employee.component.html',
  styleUrl: './add-employee.component.css'
})
export class AddEmployeeComponent implements OnInit {
  employeeForm!: FormGroup;
  entities: Entity[] = [];

  constructor(private fb: FormBuilder, private crudService: CrudService) {}

  ngOnInit(): void {
    this.employeeForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      dateOfBirth: ['', Validators.required],
      jobTitle: ['', Validators.required],
      entityId: ['', Validators.required]
    });
    this.loadEntities();
  }

  addEmployee(): void {
    if (this.employeeForm.valid) {
      const newEmployee: Employee = this.employeeForm.value;
      this.crudService.addEmployee(newEmployee).subscribe(
        (data: Employee) => {
          console.log('Employee added successfully:', data);
          this.employeeForm.reset();
        },
        (error) => {
          console.error('Error adding employee:', error);
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
}
