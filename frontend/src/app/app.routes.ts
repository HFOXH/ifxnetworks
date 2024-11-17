import { Routes } from '@angular/router';
import { LoginComponent } from './user/login/login.component';
import { AddEmployeeComponent } from './employee/add-employee/add-employee.component';
import { AddEntityComponent } from './entity/add-entity/add-entity.component';
import { ListEmployeesComponent } from './employee/list-employees/list-employees.component';
import { ListEntitiesComponent } from './entity/list-entities/list-entities.component';

export const routes: Routes = [
    {path: 'login', component: LoginComponent},
    {path: 'employees', component: ListEmployeesComponent},
    {path: 'entities', component: ListEntitiesComponent},
    {path: 'add_employee', component: AddEmployeeComponent},
    {path: 'add_entity', component: AddEntityComponent},
];
