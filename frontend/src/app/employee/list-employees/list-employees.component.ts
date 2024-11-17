import { Component, OnInit } from '@angular/core';
import { Employee } from '../../service/models/employee';
import { CrudService } from '../../service/crud.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list-employees',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-employees.component.html',
  styleUrl: './list-employees.component.css'
})
export class ListEmployeesComponent implements OnInit{
  employees: Employee[] = [];
  constructor(private crudService: CrudService) {}

  ngOnInit(): void {
    this.loadEmployees();
  }

  loadEmployees(): void {
    this.crudService.getEmployees().subscribe(
      (data: Employee[]) => {
        this.employees = data;
        console.log(this.employees)
      },
      (error) => {
        console.error('Error fetching entities:', error);
      }
    );
  }

  deleteEmployee(id: string): void{
    this.crudService.deleteEmployee(id).subscribe(
      () => {
        this.employees = this.employees.filter(e => e.employeeId !== id);
      },
      (error) => {
        console.error('Error deleting entity:', error);
      }
    );
  }

  editEmployee(id: string): void{
    window.location.href = "/edit_employee/"+id;
  }
}
