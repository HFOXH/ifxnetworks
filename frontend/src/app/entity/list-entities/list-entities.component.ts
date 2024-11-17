import { Component, OnInit } from '@angular/core';
import { Entity } from '../../service/models/entity';
import { CrudService } from '../../service/crud.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list-entities',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-entities.component.html',
  styleUrl: './list-entities.component.css'
})
export class ListEntitiesComponent implements OnInit{
  entities: Entity[] = [];
  constructor(private crudService: CrudService) {}

  ngOnInit(): void {
    this.loadEntities();
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

  deleteEntity(id: string): void {
    this.crudService.deleteEntity(id).subscribe(
      () => {
        this.entities = this.entities.filter(entity => entity.entityId !== id);
      },
      (error) => {
        console.error('Error deleting entity:', error);
      }
    );
  }

}
