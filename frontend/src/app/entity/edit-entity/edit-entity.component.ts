import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CrudService } from '../../service/crud.service';
import { Entity } from '../../service/models/entity';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-entity',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './edit-entity.component.html',
  styleUrl: './edit-entity.component.css'
})
export class EditEntityComponent implements OnInit {
  entityForm!: FormGroup;
  entityId!: string;

  constructor(
    private fb: FormBuilder,
    private crudService: CrudService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.entityId = this.route.snapshot.paramMap.get('id')!;

    this.entityForm = this.fb.group({
      entityName: ['', Validators.required],
      description: ['', Validators.required],
    });

    this.loadEntityData();
  }

  loadEntityData(): void {
    this.crudService.getEntityById(this.entityId).subscribe(
      (entity: Entity) => {
        this.entityForm.patchValue({
          entityName: entity.entityName,
          description: entity.description
        });
      },
      (error) => {
        console.error('Error fetching entity data:', error);
      }
    );
  }

  editEntity(): void {
    if (this.entityForm.valid) {
      const updatedEntity: Entity = this.entityForm.value;
      this.crudService.updateEntity(this.entityId, updatedEntity).subscribe(
        (data: Entity) => {
          this.router.navigate(['/entities']);
        },
        (error) => {
          console.error('Error updating entity:', error);
        }
      );
    }
  }

}
