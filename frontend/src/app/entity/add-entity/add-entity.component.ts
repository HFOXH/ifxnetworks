import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CrudService } from '../../service/crud.service';
import { Entity } from '../../service/models/entity';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-entity',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './add-entity.component.html',
  styleUrl: './add-entity.component.css'
})
export class AddEntityComponent implements OnInit{
  entityForm!: FormGroup;

  constructor(private fb: FormBuilder, private crudService: CrudService) {}

  ngOnInit(): void {
    this.entityForm = this.fb.group({
      entityName: ['', Validators.required],
      description: ['', Validators.required],
    });
  }

  addEntity(): void {
    if (this.entityForm.valid) {
      const newEntity: Entity = this.entityForm.value;
      this.crudService.addEntity(newEntity).subscribe(
        (data: Entity) => {
          console.log('Entity added successfully:', data);
          this.entityForm.reset();
        },
        (error) => {
          console.error('Error adding entity:', error);
        }
      );
    }
  }
}
